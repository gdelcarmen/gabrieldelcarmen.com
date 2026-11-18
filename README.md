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

## Updating the CV

The page is laid out as a journal article. Its content lives in `src/data/`,
separate from the layout, so most updates are edits to one data file:

- `profile.ts`: name, roles, abstract, keywords, contact links, the
  "Updated" date in the running head
- `training.ts`, `research.ts`, `software.ts`: the numbered sections of the
  main text, including the detail shown in each entry's card
- `futureProjects.ts`: manuscripts in progress
- `publications.ts`: the reference list, newest first
- `presentations.ts`, `supplement.ts`: the supplementary sections
- `timeline.ts`: the rows of Figure 1

Figure 2 is drawn from the dates in `publications.ts` and
`presentations.ts`, so a new paper or talk appears there once it is added to
its list. When a manuscript is published, move it from `futureProjects.ts`
to the top of `publications.ts` and renumber the references that follow,
including the `cites` numbers in `research.ts`.

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
