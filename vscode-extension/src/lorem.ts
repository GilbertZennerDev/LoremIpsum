const VOWELS = "iueoa";
const CONSONANTS = "qwrtypsdfghjklzxcvbnm";

function pick(chars: string): string {
  return chars[Math.floor(Math.random() * chars.length)];
}

function genVowel(): string {
  return pick(VOWELS);
}

function genConsonant(): string {
  return pick(CONSONANTS);
}

function genLowerAlpha(): string {
  return Math.random() < 0.5 ? genVowel() : genConsonant();
}

/** Ports the vowel/consonant word generator shared by the cpp/java/py/web implementations. */
export function genWord(firstLetters: string): string {
  const length = 4 + Math.floor(Math.random() * 3); // 4-6
  const firstLetter = firstLetters.length ? pick(firstLetters) : genConsonant();
  let word = firstLetter + genVowel();
  for (let i = 0; i < length; i++) word += genLowerAlpha();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function genText(wordCount: number, firstLetters: string): string {
  const words: string[] = [];
  for (let i = 0; i < wordCount; i++) {
    let word = genWord(firstLetters);
    if (Math.random() < 0.5) word += ".";
    words.push(word);
  }
  return words.join(" ");
}
