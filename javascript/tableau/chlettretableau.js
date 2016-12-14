function main() {
    chercherLettreA();
}


function chercherLettreA () {
    var tableau = ['bananas', 'apples', 'pears', 'avocados', 'john', 'david', 'omar', 'fred', 'idris', 'a dog', 'monkey', 'elephant', 'kayak', 'angela',];
    var mot = "";
    for ( i=0 ; i < tableau.length ; i++ ) {
        mot = tableau[i];
        var lettre = mot.substring(0,1);
        if ( lettre === "a" || lettre === "e" || lettre === "i" || lettre === "o" || lettre === "u" || lettre === "y") {
            console.log(mot);
        }
    }   
    console.log(mot.length); 
}

main();