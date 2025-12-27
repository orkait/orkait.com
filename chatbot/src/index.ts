import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import OpenAI from 'openai';

const app = new Hono();

// In-memory session storage (Workers global scope)
const sessions = new Map();
const requestCounts = new Map();

// Constants
const RATE_LIMIT = 100;
const RATE_WINDOW = 15 * 60 * 1000; // 15 minutes

// Rich context about Orkait
const SYSTEM_CONTEXT = `You are an AI assistant for Orkait, a leading digital solutions company.

**About Orkait:**
Orkait specializes in crafting digital experiences that inspire. We are a trusted partner for businesses seeking to transform their digital presence and scale their operations.

**Our Core Services:**

1. **Web App Development** 💻
   - Modern, responsive web applications
   - React, Next.js, Vue, Angular expertise
   - Progressive Web Apps (PWAs)
   - Full-stack development
   - UI/UX design and implementation

2. **Custom Software Solutions** 🛠️
   - Tailored software for unique business needs
   - API development and integration
   - Microservices architecture
   - Database design and optimization
   - Legacy system modernization

3. **Enterprise Scaling & Deployment** 📈
   - Cloud infrastructure (AWS, Azure, GCP)
   - DevOps and CI/CD pipelines
   - Kubernetes and containerization
   - Performance optimization
   - Security and compliance
   - Monitoring and observability

**Our Approach:**
- We craft solutions that inspire and scale with your business
- Focus on innovation, quality, and long-term partnerships
- Agile methodology with continuous client collaboration
- Emphasis on clean code, best practices, and maintainability

**How to Help:**
- Answer questions about our services clearly and professionally
- Be friendly, helpful, and solution-oriented
- If asked about pricing or specific projects, encourage them to visit our Contact page
- Highlight relevant case studies or expertise when appropriate
- Use emojis sparingly but effectively for engagement
- Keep responses concise (2-4 sentences) unless more detail is requested

**Important:**
- For pricing inquiries: Suggest they contact us for a custom quote
- For technical specifics: Offer general guidance and suggest a consultation
- For urgent matters: Direct them to our Contact page
- Always maintain a professional yet approachable tone

Contact Information:
- Phone: +91 9920962195
- Email: support@orkait.com
- Website: https://orkait.com
- Contact Person: Kailas Mahavarkar
`;

// Middleware
app.use('*', logger());
app.use('*', prettyJSON());
app.use('*', cors({
    origin: (origin) => origin, // Allow all origins in Workers, or specify your domain
    credentials: true,
}));

// Rate limiting function
function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const userRequests = requestCounts.get(ip) || [];

    // Clean old requests
    const recentRequests = userRequests.filter((time: number) => now - time < RATE_WINDOW);

    if (recentRequests.length >= RATE_LIMIT) {
        return false;
    }

    recentRequests.push(now);
    requestCounts.set(ip, recentRequests);
    return true;
}

// Cleanup function
let lastCleanup = Date.now();
function cleanupOldSessions() {
    const now = Date.now();
    const ONE_HOUR = 3600000;

    if (now - lastCleanup > ONE_HOUR) {
        const sizeBefore = sessions.size;
        sessions.clear();
        requestCounts.clear();
        lastCleanup = now;
        console.log(`🧹 Cleaned up ${sizeBefore} sessions and rate limit data`);
    }
}

// Routes
app.get('/health', (c) => {
    return c.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        platform: 'Cloudflare Workers',
        framework: 'Hono.js',
    });
});

app.post('/api/chatbot/chat', async (c) => {
    try {
        // Get environment variables from Cloudflare Workers context
        const env = c.env as any;

        // Initialize OpenRouter client with env vars
        const openai = new OpenAI({
            apiKey: env.OPENROUTER_API_KEY,
            baseURL: 'https://openrouter.ai/api/v1',
            defaultHeaders: {
                'HTTP-Referer': env.SITE_URL || 'https://orkait.com',
                'X-Title': 'Orkait Chatbot',
            },
        });

        // Rate limiting
        const ip = c.req.header('cf-connecting-ip') || c.req.header('x-forwarded-for') || 'unknown';
        if (!checkRateLimit(ip)) {
            return c.json({ error: 'Too many requests. Please try again later.' }, 429);
        }

        const body = await c.req.json();
        const { message, sessionId } = body;

        // Validation
        if (!message || typeof message !== 'string') {
            return c.json({ error: 'Valid message is required' }, 400);
        }

        if (!sessionId || typeof sessionId !== 'string') {
            return c.json({ error: 'Valid sessionId is required' }, 400);
        }

        if (message.length > 1000) {
            return c.json({ error: 'Message too long (max 1000 characters)' }, 400);
        }

        // Get or create session history
        let history = sessions.get(sessionId) || [];

        // Build messages with context
        const messages = [
            { role: 'system', content: SYSTEM_CONTEXT },
            ...history,
            { role: 'user', content: message },
        ];

        // Call OpenRouter
        const completion = await openai.chat.completions.create({
            model: env.OPENROUTER_MODEL || 'openai/gpt-3.5-turbo',
            messages,
            max_tokens: 300,
            temperature: 0.7,
            presence_penalty: 0.6,
            frequency_penalty: 0.3,
        });

        const aiResponse = completion.choices[0].message.content;

        // Update history (keep last 10 exchanges = 20 messages)
        history = [
            ...history,
            { role: 'user', content: message },
            { role: 'assistant', content: aiResponse },
        ].slice(-20);

        sessions.set(sessionId, history);

        // Periodic cleanup
        cleanupOldSessions();

        console.log(`[${sessionId.substring(0, 8)}...] User: "${message.substring(0, 50)}..."`);
        if (aiResponse != null) {
            console.log(`[${sessionId.substring(0, 8)}...] AI: "${aiResponse.substring(0, 50)}..."`);
        } else {
            console.log(`[${sessionId.substring(0, 8)}...] AI: <no response>`);
        }

        return c.json({
            response: aiResponse,
            sessionId,
            timestamp: new Date().toISOString(),
            tokensUsed: completion.usage?.total_tokens || 0,
        });
    } catch (error: any) {
        console.error('OpenRouter Error:', error);

        if (error.code === 'insufficient_quota' || error.status === 402) {
            return c.json({
                error: 'Service temporarily unavailable. Please try again later.'
            }, 503);
        }

        return c.json({
            error: 'Failed to get response',
            details: error.message
        }, 500);
    }
});

app.post('/api/chatbot/reset-session', async (c) => {
    const body = await c.req.json();
    const { sessionId } = body;

    if (sessionId && sessions.has(sessionId)) {
        sessions.delete(sessionId);
        return c.json({ message: 'Session reset successfully' });
    }

    return c.json({ error: 'Session not found' }, 404);
});

// 404 handler
app.notFound((c) => {
    return c.json({ error: 'Not found' }, 404);
});

// Error handler
app.onError((err, c) => {
    console.error('Error:', err);
    return c.json({ error: 'Internal server error' }, 500);
});

// Export for Cloudflare Workers
export default app;
