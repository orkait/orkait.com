# Deploying to Netlify

This guide will help you deploy your Docusaurus website to Netlify.

## Prerequisites

- A GitHub/GitLab/Bitbucket account with your code repository
- A Netlify account (free tier works fine)

## Deployment Methods

### Method 1: Deploy via Netlify Dashboard (Easiest)

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Add Netlify configuration"
   git push origin main
   ```

2. **Go to Netlify**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Sign up or log in (you can use GitHub to sign in)

3. **Import your site**
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository (`orkait-website`)

4. **Configure build settings**
   Netlify should auto-detect Docusaurus, but verify:
   - **Build command:** `npm run build` (or `bun run build` if using bun plugin)
   - **Publish directory:** `build`
   - **Node version:** 18 (or latest LTS)

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at `https://your-site-name.netlify.app`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**

   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**

   ```bash
   netlify login
   ```

3. **Initialize Netlify in your project**

   ```bash
   netlify init
   ```

   - Choose "Create & configure a new site"
   - Select your team
   - Site name (or leave blank for auto-generated)

4. **Deploy**

   ```bash
   # Deploy to production
   netlify deploy --prod
   
   # Or build first, then deploy
   npm run build
   netlify deploy --prod --dir=build
   ```

### Method 3: Using Bun (Advanced)

If you want to use Bun instead of npm:

1. **Install Bun build plugin**
   - Go to Netlify Dashboard → Site settings → Build & deploy → Build plugins
   - Add plugin: `@netlify/plugin-bun`

2. **Update netlify.toml**
   - Uncomment the bun plugin section
   - Change build command to `bun run build`

   Or manually add to `netlify.toml`:

   ```toml
   [[plugins]]
     package = "@netlify/plugin-bun"

   [build]
     command = "bun run build"
   ```

## Continuous Deployment

Once connected via Method 1, Netlify automatically:

- ✅ Deploys on every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Rebuilds on every commit

## Custom Domain Setup

1. **Add domain in Netlify**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `orkait.com`)

2. **Configure DNS**
   - Netlify will provide DNS records
   - Add them to your domain registrar:
     - Type: `A` or `CNAME`
     - Name: `@` (or `www`)
     - Value: Provided by Netlify

3. **SSL Certificate**
   - Netlify automatically provisions SSL certificates
   - HTTPS will be enabled automatically

## Environment Variables

If you need environment variables:

**Via Netlify Dashboard:**

1. Go to Site settings → Environment variables
2. Add your variables (e.g., `NODE_ENV`, `API_KEY`)

**Via Netlify CLI:**

```bash
netlify env:set VARIABLE_NAME "value"
netlify env:set NODE_ENV "production"
```

## Build Configuration

The `netlify.toml` file includes:

- ✅ Build command and publish directory
- ✅ Redirect rules for client-side routing
- ✅ Security headers
- ✅ Cache headers for static assets

## Troubleshooting

### Build fails with "command not found"

- **Solution:** Ensure Node.js 18+ is selected in Build settings
- Check that `package.json` has the correct build script

### Site shows 404 errors

- **Solution:** Verify `publish` directory is set to `build`
- Check `baseUrl` in `docusaurus.config.ts` is `/`

### Assets not loading

- **Solution:** Check `baseUrl` configuration
- Verify redirect rules in `netlify.toml`

### Build takes too long

- **Solution:** Enable build caching in Netlify
- Go to Site settings → Build & deploy → Build settings
- Enable "Clear cache and deploy site" if needed

## Quick Reference

| Setting           | Value              |
| ----------------- | ------------------ |
| Build command     | `npm run build`    |
| Publish directory | `build`            |
| Node version      | 18 (or latest LTS) |
| Framework         | Docusaurus         |

## Next Steps

After deployment:

1. ✅ Test your site at the Netlify URL
2. ✅ Set up a custom domain (if needed)
3. ✅ Configure environment variables (if needed)
4. ✅ Enable form handling (if using Netlify Forms)
5. ✅ Set up analytics (if needed)

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)
- [Netlify Community](https://answers.netlify.com/)
