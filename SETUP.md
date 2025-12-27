# 🚀 Quick Setup Guide

## Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 2: Set Up OpenRouter API Key

1. Go to https://openrouter.ai/keys
2. Sign up or log in (free!)
3. Create a new API key
4. Add credits ($5 minimum - lasts months!)
5. Copy the `.env` file:
   ```bash
   # The .env file is already created, just edit it:
   # backend/.env
   ```
6. Edit `backend/.env` and paste your API key:
   ```env
   OPENROUTER_API_KEY=sk-or-v1-your-actual-key-here
   ```

**Choose your model:**
```env
# Ultra cheap - perfect for testing! (10x cheaper)
OPENROUTER_MODEL=meta-llama/llama-3.1-8b

# Balanced - great quality/price (default)
OPENROUTER_MODEL=openai/gpt-3.5-turbo

# High quality - best value
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet
```

Browse all 200+ models: https://openrouter.ai/models

## Step 3: Install Root Dependencies

```bash
cd ..
npm install
```

## Step 4: Run Everything!

```bash
# From project root - runs both frontend and backend
npm run dev
```

This will start:
- 🤖 Backend (Hono): http://localhost:3001
- 💻 Frontend (Docusaurus): http://localhost:3000

## Step 5: Test the Chatbot

1. Open http://localhost:3000
2. Click the chatbot button (bottom right)
3. Ask a question about Orkait!

## 🎯 What's Working

- ✅ Hono.js backend (ultra-fast!)
- ✅ OpenAI GPT-3.5-turbo integration
- ✅ Rich Orkait context
- ✅ Session management
- ✅ Rate limiting
- ✅ Beautiful UI with Tailwind

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest)

```bash
cd backend
npm i -g vercel
vercel
```

Add environment variables in Vercel dashboard:
- `OPENAI_API_KEY`
- `FRONTEND_URL` (your frontend domain)
- `NODE_ENV=production`

### Option 2: Railway

1. Push to GitHub
2. Connect Railway to your repo
3. Add environment variables
4. Deploy!

### Option 3: Cloudflare Workers

Hono works natively on Cloudflare Workers for edge deployment!

## 💡 Tips

- Backend auto-reloads on changes (--watch flag)
- Frontend has hot reload
- Check console for API calls
- Session persists in localStorage

## ❓ Troubleshooting

**Backend won't start:**
- Check if port 3001 is available
- Verify OpenAI API key in `.env`

**Chatbot not responding:**
- Check backend is running on http://localhost:3001
- Open browser console for errors
- Verify API key has credits

**CORS errors:**
- Backend expects frontend on http://localhost:3000
- Update `FRONTEND_URL` in `.env` if different

## 📚 Learn More

- Hono docs: https://hono.dev
- OpenAI docs: https://platform.openai.com/docs
- Docusaurus: https://docusaurus.io

Enjoy your AI-powered chatbot! 🎉

