function main() {
    chercherGrandMot();
    chercherPetitMot();
}


function chercherGrandMot () {
    var tableau = ['bananas', 'apples', 'pears', 'avocados', 'john', 'david', 'omar', 'fred', 'idris', 'a dog', 'monkey', 'elephant', 'kayak', 'angela'];
    var premier_mot = "";
    var mot_suivant = "";
    for ( i=0 ; i < tableau.length ; i++ ) {
        premier_mot = tableau[i];
        if ( premier_mot.length > mot_suivant.length ) {
            mot_suivant = premier_mot;
        }
 
    }
    console.log(mot_suivant);    
}

function chercherPetitMot () {
    var tableau = ['bananas', 'apples', 'pears', 'avocados', 'john', 'david', 'omar', 'fred', 'idris', 'a dog', 'monkey', 'elephant', 'kayak', 'angela'];
    var premier_mot = "";
    var mot_suivant = tableau[0];
    var tableau_petit = [];
    for ( i=0 ; i < tableau.length ; i++ ) {
        premier_mot = tableau[i];
        if ( premier_mot.length <= mot_suivant.length ) {
            mot_suivant = premier_mot;
            tableau_petit.push(premier_mot);
        }
 
    }
    console.log(mot_suivant);
    console.log(tableau_petit);
    // parcourir tableau_petit pour récupérer QUE les petits ?

}

main();