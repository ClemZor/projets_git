/*Write a program that will take a year and report if it is a leap year.
	
The tricky thing here is that a leap year in the Gregorian calendar occurs:

on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

If your language provides a method in the standard library that does this look-up, pretend it doesn't exist and implement it yourself.


Notes :
For a delightful, four minute explanation of the whole leap year phenomenon, go watch this youtube video. */

function main() {
    calculerAnneeBiss(1600);
}

function calculerAnneeBiss (annee)   {

        if ( annee %4 ==0 ) { 
            
            if ( annee %100 ==0 ) {
                    
                    if (annee %400 == 0 ) {
                        console.log("bissextile");
                    }
                    else console.log("non bissextile");
            }
            else console.log("bissextile");
        }
        else console.log("non bissextile");

}

main();