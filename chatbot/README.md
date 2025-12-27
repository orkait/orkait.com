# 🚀 Orkait Chatbot - Cloudflare Workers Deployment

Hono.js chatbot deployed on Cloudflare Workers with OpenRouter integration.

## 📁 File Structure

```
chatbot/
├── src/
│   └── index.ts          # Main Hono app (entry point)
├── wrangler.jsonc        # Cloudflare Workers config
├── package.json          # Dependencies
└── README.md            # This file
```

## 🎯 Quick Deploy

### 1. Install Dependencies
```bash
cd chatbot
npm install
```

### 2. Add Your OpenRouter API Key
```bash
# This stores it as a secret (encrypted)
npx wrangler secret put OPENROUTER_API_KEY
# Paste your key when prompted: sk-or-v1-your-key-here
```

### 3. Test Locally
```bash
npm run dev
```
Visit http://localhost:8787/health

### 4. Deploy to Production
```bash
npm run deploy
```

**Done!** 🎉 Your chatbot is live on Cloudflare Workers!

## 📝 Configuration

### Update `wrangler.jsonc`:

```json
{
  "name": "orkait-chatbot",
  "main": "server.js",
  "node_compat": true,
  "vars": {
    "OPENROUTER_MODEL": "meta-llama/llama-3.1-8b",
    "SITE_URL": "https://orkait.com",
    "FRONTEND_URL": "https://orkait.com"
  }
}
```

### Environment Variables:

**Public vars** (in wrangler.jsonc):
- `OPENROUTER_MODEL` - Which model to use
- `SITE_URL` - Your website URL
- `FRONTEND_URL` - For CORS

**Secret** (use wrangler secret):
- `OPENROUTER_API_KEY` - Your OpenRouter API key

## 🌍 Your Deployment URL

After deploying, you'll get a URL like:
```
https://orkait-chatbot.your-subdomain.workers.dev
```

Update your frontend `ActionProvider.tsx`:
```typescript
this.backendUrl = 'https://orkait-chatbot.your-subdomain.workers.dev';
```

## 💰 Costs

**Cloudflare Workers Free Tier:**
- ✅ 100,000 requests/day
- ✅ Unlimited bandwidth
- ✅ No cold starts
- ✅ Global edge deployment

**Paid Plan ($5/month):**
- 10 million requests/month
- Better CPU time limits

**OpenRouter:**
- Llama 3.1: ~$0.00001 per conversation
- GPT-3.5: ~$0.0001 per conversation

## 🔧 Commands

```bash
# Local development
npm run dev

# Deploy to production
npm run deploy

# View logs
npx wrangler tail

# Add/update secrets
npx wrangler secret put OPENROUTER_API_KEY

# List deployments
npx wrangler deployments list

# Rollback if needed
npx wrangler rollback
```

## 🎯 Endpoints

- `GET /health` - Health check
- `POST /api/chatbot/chat` - Send message
- `POST /api/chatbot/reset-session` - Reset conversation

## 📊 Monitoring

View logs and analytics:
```bash
npx wrangler tail
```

Or in Cloudflare dashboard:
https://dash.cloudflare.com → Workers & Pages → orkait-chatbot

## 🚀 Benefits of Cloudflare Workers

1. **Edge Deployment** - Runs close to users worldwide
2. **No Cold Starts** - Instant responses
3. **Auto-Scaling** - Handles traffic spikes
4. **Free Tier** - 100K requests/day free!
5. **Fast** - Hono.js is built for Workers

## 🔄 Update After Deploy

1. Get your Workers URL from deployment output
2. Update `src/components/shared/Chatbot/ActionProvider.tsx`:

```typescript
this.backendUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3001'
  : 'https://orkait-chatbot.your-subdomain.workers.dev';
```

3. Redeploy your frontend!

## 🆘 Troubleshooting

**"Module not found: openai"**
- Run `npm install` in chatbot directory

**"OPENROUTER_API_KEY is not set"**
- Run `npx wrangler secret put OPENROUTER_API_KEY`

**"node:*" module errors**
- Make sure `node_compat: true` is in wrangler.jsonc

**CORS errors**
- Update `FRONTEND_URL` in wrangler.jsonc

## 📚 Learn More

- Cloudflare Workers: https://workers.cloudflare.com
- Wrangler CLI: https://developers.cloudflare.com/workers/wrangler/
- Hono on Workers: https://hono.dev/getting-started/cloudflare-workers

---

**Your chatbot is now deployed on Cloudflare's global edge network!** ⚡

