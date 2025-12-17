/*
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

if __name__ == '__main__': main()*/

#include <string>
#include <iostream>
#include <fstream>
using namespace std;

char genVowel()
{
	char	c;
	string	vowels;

	vowels = string("iueoa");
	c = vowels[rand() % vowels.size()];
	return (c);
}

char genConsonant()
{
	char	c;
	string	consonants;

	consonants = string("qwrtypsdfghjklzxcvbnm");
	c = consonants[rand() % consonants.size()] - 32;
	return (c);
}

char genLowerAlpha()
{
	char		c;
	unsigned int	i;

	i = 97 + rand() % 26;
	c = static_cast<char>(i);
	return (c);
}

string genWord(string firstLetters)
{
	string		word;
	unsigned int	length;
	string		firstLetter;

	length = 4 + rand() % 3;
	firstLetter = genConsonant();
	if (firstLetters.size()) firstLetter = firstLetters[rand() % firstLetters.size()];
	word += firstLetter + genVowel();
	for (int i=0; i < length - 2; i++)
		word += genLowerAlpha();
	return (word);
}

void save_output(string content)
{
	ofstream	MyFile("src");

	MyFile << content;
	MyFile.close();
}


int main(int ac, char **av)
{
	string		txt;
	unsigned int	wordcount;
	string		firstLetters;

	srand(time(NULL));
	wordcount = 12;
	if (ac > 1) wordcount = atoi(av[1]);
	if (ac > 2) firstLetters = string(av[2]);
/*	for(int i=0; i < 10; i++)
		cout << genVowel() << "\n";
	for(int i=0; i < 10; i++)
		cout << genConsonant() << "\n";
	for(int i=0; i < 10; i++)
		cout << genLowerAlpha() << "\n";*/
	for(int i=0; i < wordcount; i++)
		txt += genWord(firstLetters) + " ";
	save_output(txt);
	return (0);
}
