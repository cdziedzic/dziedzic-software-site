# Dziedzic Software Solutions — Landing Site

Static landing page for Dziedzic Software Solutions LLC. Built with Vite + React + TypeScript and deployed to GitHub Pages.

## Before going live

Edit `src/siteConfig.ts` and replace the `TODO_PLACEHOLDER` values:

- `supportEmail`
- `supportPhone`
- `mailingAddress`

These are required by Stripe (for account activation) and Apple Developer Program enrollment.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/dziedzic-software-site/
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deploying to GitHub Pages

1. Create a new GitHub repo named `dziedzic-software-site`
2. `git init && git add . && git commit -m "Initial commit"`
3. `git remote add origin https://github.com/<your-user>/dziedzic-software-site.git`
4. `git push -u origin main`
5. `npm run deploy` — publishes `dist/` to the `gh-pages` branch
6. In the GitHub repo: **Settings → Pages → Source = `gh-pages` branch**
7. Visit `https://<your-user>.github.io/dziedzic-software-site/`

## Custom domain (later)

When you point a real domain at this site:

1. Add a `public/CNAME` file containing the domain (e.g. `dziedzicsoftware.com`)
2. In `vite.config.ts`, change `base: '/dziedzic-software-site/'` back to `base: '/'`
3. Configure DNS per GitHub Pages instructions
4. Redeploy with `npm run deploy`
