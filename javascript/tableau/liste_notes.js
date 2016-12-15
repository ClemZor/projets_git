/* faire une liste de note de 0 à 20
classe de 20 élèves
puis ressortir la plus haute;
la plus petite;
la moyenne de la classe */

main();

function main () {  // l'ordre d'appel respecte l'ordre d'écriture 
        var tableau_notes = RemplirTableauNotes(); 
            console.log("Voici le tableau des notes  :  " + tableau_notes);

        var note_haute = RecupererHauteNote(tableau_notes);
            console.log("La note la plus haute est  :  " + note_haute);

        var note_basse = RecupererBasseNote(tableau_notes);
            console.log("La note la plus basse est  :  " + note_basse);

        var moyenne_notes = RecupererMoyenne(tableau_notes);
            console.log("La moyenne est de  :  " + moyenne_notes);

        var notes_dessus_moy = RecupererDessusMoy(tableau_notes, moyenne_notes);
            console.log("Le nombre de notes au dessus de la moyenne est  :  " + notes_dessus_moy);

        var occurrences_de_dix = RecupererOccurenceDix(tableau_notes);
            console.log("Le nmobre d'occurrences de 10 est de  :  " + occurrences_de_dix);
}

function RemplirTableauNotes() { // remplie aléatoirement un tableau de notes (0 à 20);classe de 20 élèves.
        
        var notes_classe = [];
        
        for (i=0 ; i <= 19 ; i++){
            notes_classe.push(Math.floor(Math.random()*20));
        }
    return notes_classe;
} 


function RecupererHauteNote(tableau_notes) { // récupère la note la plus haute de la classe
        
        var note_min = 0;
        
        for (i=0 ; i < tableau_notes.length ; i++) { //parcourt du tableau
            if ( note_min < tableau_notes[i] ) {  
                    note_min = tableau_notes[i]; // compare avec valeur tableau et si plus grand on garde la valeur
        }
    }
    return note_min;
}

function RecupererBasseNote(tableau_notes) { // récupère la note la plus basse de la classe
        
        var note_max = 20;
        
        for (i=0 ; i < tableau_notes.length ; i++) { //parcourt du tableau
            if ( note_max > tableau_notes[i] ) {
                    note_max = tableau_notes[i]; // compare avec valeur tableau et si plus petit on garde la valeur
            }
        }
    return note_max;
}

function RecupererMoyenne(tableau_notes) { // calcule la moyenne de la classe
        
        var somme = 0;
        var moyenne_classe = 0;
        
        for (i=0 ; i < tableau_notes.length ; i++){ //parcourt du tableau
            somme = somme + tableau_notes[i]; // calcul de la somme de toutes les notes
        }
        
        var moyenne_classe = somme / tableau_notes.length; // calcul de la moyenne en fonction de la somme
    return moyenne_classe;
}

function RecupererDessusMoy(tableau_notes, moyenne_notes) { // récupère ttes notes au dessus de la moyenne

        var nb_notes_dessus = 0;

        for (i=0 ; i < tableau_notes.length ; i++) { //parcourt du tableau
            if ( tableau_notes[i] > moyenne_notes) {
                nb_notes_dessus++;   // on incrémente si la note est au dessus de la moyenne
            }
        }
    return nb_notes_dessus;
}


function RecupererOccurenceDix(tableau_notes) {
        
        var occu_dix = 0;
                
        for (i=0 ; i < tableau_notes.length ; i++) { //parcourt du tableau
            if ( tableau_notes[i] === 10 ) {
                    occu_dix++;
            }
        }
    return occu_dix;

}