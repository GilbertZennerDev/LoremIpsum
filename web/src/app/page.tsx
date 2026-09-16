import Generator from "@/components/generator";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-2xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Lorem Ipsum Generator
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Pseudo-random placeholder words from an alternating vowel/consonant
            engine — the same algorithm ported to C++, Java and Python in this
            project.
          </p>
        </header>
        <Generator />
      </div>
    </main>
  );
}
