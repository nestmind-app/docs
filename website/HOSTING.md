# NestMind Website Hosting Guide

Instructions for hosting the NestMind static website.

---

## Free Hosting Services

### GitHub Pages (Recommended)

Already using GitHub - easiest option.

```bash
# Enable in repo settings: Settings > Pages > Source: main branch, /website folder
# URL: https://nestmind-app.github.io/NestMind/
```

- **Cost**: Free
- **Setup**: 2 minutes
- **Custom domain**: Supported

### Netlify

Drag & drop or connect to GitHub.

1. Go to https://netlify.com
2. Drag the `website` folder onto the page
3. Done - get instant URL

- **Cost**: Free (100GB bandwidth/month)
- **Setup**: 1 minute

### Vercel

```bash
npm i -g vercel
cd website
vercel
```

- **Cost**: Free tier
- **Setup**: 2 minutes

### Cloudflare Pages

1. Go to https://pages.cloudflare.com
2. Connect GitHub repo
3. Set build output to `/website`

- **Cost**: Free (unlimited bandwidth)
- **Setup**: 5 minutes

---

## Local Hosting + Public Tunnel

For testing, demos, or temporary sharing.

### ngrok (Popular but Limited Free Tier)

```bash
# Install
brew install ngrok

# Start local server
cd website
python3 -m http.server 8000

# In another terminal - create public tunnel
ngrok http 8000
```

- **Cost**: Free tier has limitations
- **Limitations**: Random URL, ~2hr sessions, rate limited, requires account
- **Paid**: $8/month for persistent URLs

### Cloudflare Tunnel - 100% FREE

```bash
brew install cloudflared
cd website
python3 -m http.server 8000

# In another terminal
cloudflared tunnel --url http://localhost:8000
```

- **Cost**: 100% free (Cloudflare account required, but free)
- **More reliable** and persistent than ngrok
- **No session limits**

### localtunnel (Simple) - 100% FREE

```bash
cd website
python3 -m http.server 8000

# In another terminal
npx localtunnel --port 8000
```

- **Cost**: 100% free, no account required
- **No limits** on usage

### localhost.run (No Install Needed) - 100% FREE

```bash
cd website
python3 -m http.server 8000

# In another terminal - just SSH
ssh -R 80:localhost:8000 localhost.run
```

- **Cost**: 100% free, no account required
- **One-liner**, no installation
- **Best for**: Quick demos, zero setup

---

## Quick Reference

| Goal | Best Option | 100% Free? |
|------|-------------|------------|
| **Production** | GitHub Pages | Yes |
| **Quick demo** | localhost.run | Yes (no account) |
| **Zero setup** | Netlify drag & drop | Yes |
| **Persistent tunnel** | Cloudflare Tunnel | Yes |
| **Popular but limited** | ngrok | No (free tier has limits) |

---

## Local Development

To preview the website locally:

```bash
cd /Users/hebertg/iOSDev/NestMind/website
python3 -m http.server 8000
# Open http://localhost:8000
```

Or with live reload:

```bash
npx live-server
```

---

**Last Updated**: December 18, 2025
