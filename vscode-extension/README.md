# Lorem Ipsum Generator

VS Code extension that inserts pseudo-random placeholder text using this
project's vowel/consonant word engine (same algorithm as
[`cpp/`](../cpp), [`java/`](../java), [`py/`](../py) and [`web/`](../web)).

## Usage

Open the Command Palette and run **Lorem Ipsum: Insert Placeholder Text**.
You'll be prompted for a word count and an optional set of allowed first
letters, then the generated text replaces your current selection(s).

## Development

```bash
npm install
npm run compile
```

Press `F5` in VS Code to launch an Extension Development Host.

## Packaging

```bash
npm run package
```

Produces a `.vsix` you can install via `code --install-extension <file>.vsix`.
