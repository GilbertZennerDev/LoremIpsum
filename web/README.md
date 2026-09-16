# Lorem Ipsum — web

Static Next.js app that generates placeholder text with the project's
vowel/consonant word engine (ported from [`cpp/main.cpp`](../cpp/main.cpp) /
[`java/LoremIpsum.java`](../java/LoremIpsum.java) / [`py/app.py`](../py/app.py)).
No backend or database — everything runs client-side.

## Development

```bash
npm install
npm run dev
```

## Deployment

Standard Docker + shared Caddy setup:

```bash
./deploy.ps1
```

Builds the image locally, ships it to the server via `docker save | ssh | docker load`,
then `git pull && docker compose up -d --force-recreate` on `/opt/lorem-ipsum`.
The service joins the shared `feierblum_default` network and is exposed at
`lorem-ipsum.workflowsolved.com` via the shared Caddy reverse proxy — no port
is published directly.
