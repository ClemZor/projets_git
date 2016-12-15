/*  0, 1, 2, 3, 5, 8, 13, 21 .....  */


function main () {
    var suite_fibo = calculerFibonnacci(21);
    console.log(suite_fibo);
    
}

function calculerFibonnacci(nombre) { 
    var nb_petit= 0;
    var nb_grand= 1;
    var resultat;

    for ( i=0 ; i < nombre ; i++) {
        
        resultat = nb_petit + nb_grand;
        console.log(resultat);
        nb_petit=nb_grand;
        nb_grand=resultat;     
    }
    return true;
}


main();