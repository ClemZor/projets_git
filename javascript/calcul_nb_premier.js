/*
Un nombre premier est un entier naturel qui admet exactement deux diviseurs distincts entiers et positifs 
(qui sont alors 1 et lui-même). 
Ainsi, 1 n'est pas premier car il n'a qu'un seul diviseur entier positif ; 
0 non plus car il est divisible par tous les entiers positifs.
*/

function main () {
    calculPremier(241);
}

function calculPremier ( nombre) {

    if ( nombre%1 == 0 && nombre%nombre == 0 && nombre !=1 && nombre !=0) {
            if ( nombre%2 ==0 || nombre%3 ==0 || nombre%5 ==0 || nombre%7 ==0 ) {
                console.log("non premier");
            }
            else console.log("premier");

    }
    else console.log("non premier");

}

main();