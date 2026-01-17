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
	open("loremIpsum", "w").write(txt)

def	main():
	av = sys.argv
	ac = len(av)
	if ac != 3: print("Usage: python3 app.py wordcount firstletters"); exit();
	try:
		wordcount = int(av[1])
		firstLetters = av[2]
	except Exception as e: print(e); return ;
	txt = " ".join([genWord(firstLetters) for i in range(wordcount)])
	print(txt)
	saveOutput(txt)

if __name__ == '__main__': main()
