function trouverChiffre () {
    var chiffreADeviner = Math.round(Math.random()*100);
    var essais = 10;
    alert("Vous avez " + essais + " essais");
    var chiffreRenvoye = prompt("Entrer un nombre entre 0 et 100");
    //console.log(chiffreADeviner);
    //console.log(chiffreRenvoye);
    
    while(chiffreRenvoye !== chiffreADeviner && essais !== 0){

        if (chiffreRenvoye < chiffreADeviner) {
            //console.log("trop petit");
            alert("IL vous reste  " + essais + " essais");
            chiffreRenvoye = prompt("Vous avez rentré   " + chiffreRenvoye + "   Entrez une valeur plus grande");
            essais--;
            
        }
        else if (chiffreRenvoye > chiffreADeviner){
            //console.log("trop grand");
            chiffreRenvoye = prompt("Vous avez rentré   " + chiffreRenvoye + "   Entrez une valeur plus petite");
            essais--;
            alert("IL vous reste  " + essais + " essais");
        }
        else if ( isNaN(chiffreRenvoye) ) {
            //console.log("bouffon");
            chiffreRenvoye = prompt("Vous avez rentré   " + chiffreRenvoye + "   Entrez un nombre entre 0 et 100");
        }
        else chiffreRenvoye = chiffreADeviner;
    }
    
    if ( chiffreRenvoye = chiffreADeviner ) {
        alert("GAGNE  " + "  Le chiffre à trouver était :   " + chiffreRenvoye);
    }
    else alert("Vous avez perdu !");

    return chiffreRenvoye;
}


function main(){
trouverChiffre();
}

main();