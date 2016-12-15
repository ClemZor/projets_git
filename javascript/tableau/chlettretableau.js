function main() {
    
    var res_lettreA = chercherLettreA();
    console.log(res_lettreA);
}


function chercherLettreA () {
    var tableau = ['bananas', 'apples', 'pears', 'avocados', 'john', 'david', 'omar', 'fred', 'idris', 'a dog', 'monkey', 'elephant', 'kayak', 'angela',];
    var mot = "";
    var tableau2 = [];
    for ( i=0 ; i < tableau.length ; i++ ) {
        mot = tableau[i];
        var lettre = mot.substring(0,1);
        if ( lettre === "a" || lettre === "e" || lettre === "i" || lettre === "o" || lettre === "u" || lettre === "y") {
            tableau2.push(mot);
        }
    }   
    return tableau2;

}

main();