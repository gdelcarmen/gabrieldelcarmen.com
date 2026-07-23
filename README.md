# gabrieldelcarmen.com

Gabriel del Carmen's curriculum vitae website, built with React, TypeScript,
and Vite.

## Local development

```sh
npm ci
npm run dev
```

Create a production build with:

```sh
npm run build
```

The compiled site is written to `dist/`.

## Deployment

Vercel is the canonical host. The Vercel project is connected to this GitHub
repository so every pull request receives a preview deployment and every push
to `main` updates production. The repository's GitHub Actions workflow also
runs the production build as an independent CI check.

`vercel.json` records the production build contract:

- install with `npm ci`
- build with `npm run build`
- publish `dist/`

The custom domains are `gabrieldelcarmen.com` and
`www.gabrieldelcarmen.com`. Do not point either domain at Netlify or GitHub
Pages unless the canonical deployment workflow is intentionally migrated at
the same time.
