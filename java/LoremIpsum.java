import java.util.Random;
import java.lang.Character;

public class LoremIpsum
{
	private Random random;
	
	public LoremIpsum()
	{
		this.random = new Random();
	}

	private char genVowel()
	{
		int		i;
		String	vowels;

		vowels = "iueoa";
		i = random.nextInt(vowels.length());
		return vowels.charAt(i);
	}

	private char genConsonant()
	{
		int		i;
		String	consonants;

		consonants = "qwrtypsdfghjklzxcvbnm";
		i = random.nextInt(consonants.length());
		return consonants.charAt(i);
	}

	private char genLowerAlpha()
	{
		int		i;

		i = random.nextInt(2);
		if (i == 1) return genVowel();
		return genConsonant();
	}
	
	private String genWord(String firstLetters)
	{
			int				index;
			int				length;
			int				minLength;
			int				maxLength;
			char			firstLetter;
			StringBuilder	word;

			minLength = 4;
			maxLength = 6;
			length = random.nextInt(maxLength - minLength + 1) + minLength;
			firstLetter = genConsonant();
			if (firstLetters.length() > 0)
			{
				index = random.nextInt(firstLetters.length());
				firstLetter = firstLetters.charAt(index);
			}		
			word = new StringBuilder("");
			word.append(Character.toUpperCase(firstLetter));
			word.append(genVowel());
			for(int i=0; i < length - 2; i++)
				word.append(genLowerAlpha());
			if (random.nextInt(2) == 1) word.append(". ");
			else word.append(" ");
			return word.toString();
	}

	public String outputText(String[] args)
	{
		StringBuilder	sb;
		int				amountWords;
		String			firstLetters;

		amountWords = 10;
		sb = new StringBuilder();
		firstLetters = new String();
		if (args.length > 1) firstLetters = args[1];
		if (args.length > 0) amountWords = Integer.parseInt(args[0]);
		for(int i=0; i < amountWords; i++)
			sb.append(genWord(firstLetters));
		return sb.toString();
	}

	public static void main(String[] args)
	{
		//outputText(args);
	}
}
