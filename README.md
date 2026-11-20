# Shubham Singh — Portfolio

Full project source with the animated 3D character, two career experiences,
eight illustrated projects, project categories, Tech Stack and contact form.
The original chess page remains available at `/play`; the home-page
“Play With Me” action has been replaced by “Let’s Talk”.

## Run locally

Install a current Node.js LTS release (22 or newer) and Bun. Extract the ZIP,
open a terminal inside the extracted folder and run:

```sh
bun install
bun run dev
```

Open the local address printed by Vite. Alternatively, use `npm install`
and `npm run dev`. Run `bun run test` for the included tests.
For production use `bun run build`; deployment uses the TanStack Start
server output, not a plain static HTML folder.

## Live visitor counter

The hero counter increments once per home-page visit and stores the shared
total in Supabase. Run
[`supabase/migrations/20261121000100_portfolio_visitors.sql`](./supabase/migrations/20261121000100_portfolio_visitors.sql)
in the Supabase SQL Editor, then configure the server-side environment
variables `SUPABASE_URL` and `SUPABASE_ANON_KEY` in the deployment host and
redeploy. Use the project's public anon/publishable key only; never use the
service-role key. Until configured, the hero reports the counter as unavailable.

## Contact email activation

The contact form submits to FormSubmit for `shubhamkanpura7@gmail.com`.
Before relying on it, send a real test message from the public site, find
the FormSubmit activation email in that inbox (including spam) and activate
the form. Send another test message and confirm it arrives. Interface success
means FormSubmit accepted the request; it does not prove inbox delivery.
Real inbox delivery is not verified in this export. Direct email remains
available as a fallback.

## Included and excluded

- Includes source, package manifests, lockfile, tests, configuration, all eight
  project covers, 3D model/environment, Draco decoder and chess assets.
- Excludes repository metadata, dependencies, generated production output,
  workspace metadata, private credentials and temporary verification files.
- The optional original chess conversation endpoint requires a server-side
  `GROQ_API_KEY`; no API key is included. The portfolio and contact form do
  not require that key.
- Several projects link to the owner's GitHub profile because a specific
  repository URL was not provided. Project covers are illustrative visuals,
  not verified screenshots of deployed projects.

## Stack

TanStack Start, React, TypeScript, Tailwind CSS, Three.js, GSAP and Lenis.
