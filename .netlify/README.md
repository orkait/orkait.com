# Netlify Deployment Guide

This directory contains Netlify-specific configuration files.

## Quick Deploy Options

### Option 1: Deploy via Netlify UI (Recommended for first-time setup)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Add Netlify configuration"
   git push origin main
   ```

2. **Go to Netlify Dashboard**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Sign up/Login with your GitHub account

3. **Add New Site**
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select your repository

4. **Configure Build Settings**
   - **Build command:** `bun run build`
   - **Publish directory:** `build`
   - **Node version:** 18 (or latest LTS)

5. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   # or
   bun add -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify**
   ```bash
   netlify init
   ```
   - Follow the prompts to link your site
   - Choose "Create & configure a new site"
   - Select your team
   - Site name (or leave blank for auto-generated)

4. **Deploy**
   ```bash
   # Build and deploy
   netlify deploy --prod
   
   # Or just build first, then deploy
   bun run build
   netlify deploy --prod --dir=build
   ```

### Option 3: Continuous Deployment (Recommended)

Once connected via Option 1, Netlify will automatically:
- Deploy on every push to your main branch
- Create preview deployments for pull requests
- Rebuild on every commit

## Environment Variables

If you need to set environment variables:

1. **Via Netlify UI:**
   - Go to Site settings → Environment variables
   - Add your variables

2. **Via Netlify CLI:**
   ```bash
   netlify env:set VARIABLE_NAME "value"
   ```

## Custom Domain

1. Go to Site settings → Domain management
2. Add your custom domain (e.g., orkait.com)
3. Follow DNS configuration instructions
4. Netlify will automatically provision SSL certificates

## Build Settings Reference

- **Build command:** `bun run build`
- **Publish directory:** `build`
- **Node version:** 18 (or latest LTS)
- **Package manager:** bun (or npm if bun isn't available)

## Troubleshooting

### Build fails with "bun: command not found"
- Netlify may not have bun installed by default
- Add a build plugin or use npm instead:
  - Change build command to: `npm run build`
  - Or add a build plugin for bun support

### Build succeeds but site shows 404
- Check that `publish` directory is set to `build`
- Verify `baseUrl` in `docusaurus.config.ts` is `/`

### Assets not loading
- Check `baseUrl` configuration
- Verify redirect rules in `netlify.toml`

