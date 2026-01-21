
public class Tester
{
	public static void main(String[] args)
	{
		String test;
		char	c;

		LoremIpsum li = new LoremIpsum();
		test = li.outputText(args);
	//	c = li.genVowel();
		System.out.print(test);
		//System.out.print(c);
	}
}
