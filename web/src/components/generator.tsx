"use client";

import { useState } from "react";
import { genText } from "@/lib/lorem";

export default function Generator() {
  const [wordCount, setWordCount] = useState(50);
  const [firstLetters, setFirstLetters] = useState("");
  const [output, setOutput] = useState(() => genText(50, ""));
  const [copied, setCopied] = useState(false);

  function handleGenerate() {
    const count = Math.min(Math.max(wordCount || 1, 1), 2000);
    setOutput(genText(count, firstLetters.replace(/[^a-zA-Z]/g, "")));
    setCopied(false);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable, ignore
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm sm:flex-row sm:items-end dark:border-zinc-800 dark:bg-zinc-900">
        <label className="flex flex-1 flex-col gap-1.5">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Word count
          </span>
          <input
            type="number"
            min={1}
            max={2000}
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            className="rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-zinc-500 dark:border-zinc-700"
          />
        </label>
        <label className="flex flex-1 flex-col gap-1.5">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            First letters (optional)
          </span>
          <input
            type="text"
            placeholder="e.g. abc"
            value={firstLetters}
            onChange={(e) => setFirstLetters(e.target.value)}
            className="rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-zinc-500 dark:border-zinc-700"
          />
        </label>
        <button
          onClick={handleGenerate}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Generate
        </button>
      </div>

      <div className="relative rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <button
          onClick={handleCopy}
          className="absolute right-4 top-4 rounded-md border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <p className="pr-16 text-sm leading-relaxed whitespace-pre-wrap text-zinc-800 dark:text-zinc-200">
          {output}
        </p>
      </div>
    </div>
  );
}
