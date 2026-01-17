#include <string>
#include <fstream>
#include <iostream>
using namespace std;

char genVowel()
{
	static const string vowels = string("iueoa");
	return (vowels[rand() % vowels.size()]);//pick a random vowel.
}

char genConsonant()
{
	static const string consonants = string("qwrtypsdfghjklzxcvbnm");
	return (consonants[rand() % consonants.size()]);//pick random consonant
}

char genLowerAlpha()
{
	static bool printVowel = true;
	static const string vowels = string("iueoa");
	static const string consonants = string("qwrtypsdfghjklzxcvbnm");
	printVowel = !printVowel;
	if (printVowel) return (genVowel());
	return (genConsonant());	
}

string genWord(string firstLetters)
{
	int		i;
	string		word;
	unsigned int	length;
	string		firstLetter;

	length = 4 + rand() % 3;//length 4 - 6
	firstLetter = genConsonant();//get generic consonant
	if (firstLetters.size()) firstLetter = firstLetters[rand() % firstLetters.size()];//take consonant from firstLetters if given
	word = firstLetter + genVowel();//add a consonant followed by a vowel
	i = -1;
	while (++i < length)
		word += genLowerAlpha();
	return (word);
}

void save_output(string content)
{
	ofstream	MyFile("output.md");

	MyFile << content;
	MyFile.close();
}

int main(int ac, char **av)
{
	string		txt;

	srand(time(NULL));
	if (ac != 3){cout << "Usage: ./LoremIpsum wordcount firstletters\n"; return (1);}
	try
	{
		for(int i=0; i < abs(stoi(av[1])); i++)//add wordcount words
			txt += genWord(av[2]) + " ";//pass firstletters to genWord
	}
	catch (const exception &e)
	{
		cout << "Error Bad Input.\n";
		return (1);
	}
	cout << "Output " << txt << " saved as output.md!";
	save_output(txt);
	return (0);
}
