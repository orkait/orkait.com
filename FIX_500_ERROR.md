# Quick Fix Guide

## Issue: 500 Internal Server Error

Your Workers deployment is live but missing the OpenRouter API key!

## Solution:

Run this command in your terminal:

```bash
cd chatbot
npx wrangler secret put OPENROUTER_API_KEY
```

When prompted, paste your OpenRouter API key: `sk-or-v1-your-key-here`

Then test again!

## Check Logs

To see what's actually happening:

```bash
cd chatbot
npx wrangler tail
```

This will show you real-time logs from your Workers deployment.

## Common Issues:

1. **API Key not set** (most likely) - Run the command above
2. **Wrong API key** - Make sure it starts with `sk-or-v1-`
3. **No credits on OpenRouter** - Check https://openrouter.ai/account

## After Adding the Key:

The changes take effect immediately - just refresh your browser and try the chatbot again!

