var operation = "";
var operateur = "";
var premierNombre;
var deuxiemeNombre;
var positionOperateur;


function afficher () {
    $('input').val(operation);

}

function reinitialiser() {
    operation = "";
    operateur = "";
    premierNombre;
    deuxiemeNombre;
    positionOperateur;
}

function cliquerBtn () {
    
    var touche = $(this).html();

    if ( isNaN(touche) ) {
        if ( touche == "C") {
            reinitialiser();
            $('input').val("");
            return true;

        }
        if ( touche == "=") {
            recupererDeuxiemeNombre();
            calculer();
            return true;
        }
        recupererOperateur(touche);
        recupererPremierNombre();
    }
    operation += touche;
    afficher();
}

function recupererOperateur(laTouche) {
    operateur = laTouche;
    positionOperateur = operation.length;

}

function recupererPremierNombre () {
    premierNombre = parseInt(operation.substr(0, (operation.length)));

}

function recupererDeuxiemeNombre () {
    deuxiemeNombre = parseInt(operation.substr(positionOperateur+1));
}

function calculer() {
    var resultat;
    switch ( operateur ) {
        case "+" :
            resultat = premierNombre + deuxiemeNombre;
            break;
        case "-" :
            resultat = premierNombre - deuxiemeNombre;
            break;
        case "*" :
            resultat = premierNombre * deuxiemeNombre;
            break;
        case "/" :
            resultat = premierNombre / deuxiemeNombre;
            break;
    }
    operation = operation + "=" + resultat;
    afficher();
}

$(document).ready(function() {
    $('input').val("");
    $('button').click(cliquerBtn);

});