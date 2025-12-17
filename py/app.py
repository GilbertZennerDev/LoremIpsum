"""the idea is to generate pseudo words
"""

import sys
import random as r

def genVowel():
	vowels = "iueoa"
	return r.choice(vowels)

def genConsonant():
	consonants = "qwrtypsdfghjklzxcvbnm"
	return r.choice(consonants)

def genLowerAlpha():
	return chr(r.randint(97, 97 + 25))

def genWord(firstLetters):
	length = r.randint(4, 6)
	firstLetter = genConsonant()
	if len(firstLetters): firstLetter = r.choice(firstLetters)
	word = firstLetter + genVowel() + "".join([genLowerAlpha() for i in range(length - 2)])
	return word.capitalize()
	
def saveOutput(txt):
	open("src", "w").write(txt)

def	main():
	av = sys.argv
	ac = len(av)
	wordcount = 12
	firstLetters = ""
	if ac > 1: wordcount = int(av[1])
	if ac > 2: firstLetters = av[2]
	txt = " ".join([genWord(firstLetters) for i in range(wordcount)])
	print(txt)
	saveOutput(txt)

if __name__ == '__main__': main()
