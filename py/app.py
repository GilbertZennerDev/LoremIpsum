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

def genWord(length):
	word = genConsonant() + genVowel() + "".join([genLowerAlpha() for i in range(length - 2)])
	return word.capitalize()

def lorem(wordcount):
	txt = ""
	for i in range(wordcount):
		txt += genWord(r.randint(4, 6)) + " "
	print(txt)

def	main():
	av = sys.argv
	ac = len(av)
#	for i in range(10):
#		print(genWord(4))
	lorem(10)

if __name__ == '__main__': main()
