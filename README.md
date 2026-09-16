# LoremIpsum

A pseudo-random placeholder-text generator, implemented multiple times as a
learning exercise: the same alternating vowel/consonant word algorithm,
ported across languages and now as a web app.

- [`cpp/`](cpp) — C++ CLI
- [`java/`](java) — Java class
- [`py/`](py) — Python CLI
- [`web/`](web) — Next.js web app (the live, deployed version)
- [`vscode-extension/`](vscode-extension) — VS Code extension: insert placeholder text via the Command Palette

## Algorithm

Words are built by alternating a random vowel (`iueoa`) and a random
consonant (`qwrtypsdfghjklzxcvbnm`), optionally biasing the first letter of
each word toward a given set of allowed letters.

## Web app

See [`web/README.md`](web/README.md) for local development and deployment.
