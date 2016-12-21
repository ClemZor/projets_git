/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */
var MINUTE = 1;
var SECONDE = 10;
var DEPART_CHRONO;
var TACHE;
var NB_POMO = 0;

function demarrerChrono() {
    
    if ( SECONDE < 0 ) {  // passage seconde => minute
        MINUTE--;
        SECONDE = 10;
    };
    if ( MINUTE < 0) {  // fin du chrono
            alert("DRRIINNGGG");
            stop();

        };
    $('.time').text( MINUTE + ":" + SECONDE);
    SECONDE--;

};

function play() {
    
    DEPART_CHRONO = setInterval( demarrerChrono, 1000);     
    gererChampTexte(true); // bloque l'input pour ne pas modifier le nom de la tâche
    gererBoutonPlay(true); //bloque le fait de pouvoir spammer le bouton play
    gererBoutonPause(false); // redonne accès  pauses
    gererBoutonStop(false); // redonne accès  stop

}

function pause() {
    
    clearInterval(DEPART_CHRONO);        
    $('.time').text( MINUTE + ":" + SECONDE);
    gererBoutonPlay(false); // redonne accès au bouton play
}

function stop() {
    
    clearInterval(DEPART_CHRONO);
    MINUTE = 1;
    SECONDE = 10;
    $('.time').text( MINUTE + ":" + SECONDE);
    // recupération TACHE et l'ajouter à la suite
    TACHE = $('#task').val();
    $('#done').append('<li class="list-group-item"><s>'+ TACHE + '</s></li>');
    $('#task').val(""); // puis remettre cette valeur à vide
    //bloque pause et stop
    gererBoutonPause(true);
    gererBoutonStop(true);
    // incrémentation du nombres de tâches pour gérer les pauses
    NB_POMO++;
    // selon valeur NB_POMO, input et play ré-accessibles
    if ( NB_POMO === 4) {
        setTimeout(function() { 
                    gererChampTexte(false);
                    gererBoutonPlay(false);
                    }, 10000);
        NB_POMO = 0;
    }
    else setTimeout(function() { 
                    gererChampTexte(false);
                    gererBoutonPlay(false);
                    }, 5000);
}

function gererBoutonPlay(acces) {   //gère l'acces au bouton play
        $('#play').prop('disabled', acces);
}

function gererBoutonPause(acces) {  //gère l'acces au bouton pause
        $('#pause').prop('disabled', acces);
}

function gererBoutonStop(acces) {   //gère l'acces au bouton stop
        $('#stop').prop('disabled', acces);
}

function gererChampTexte(acces) {   //gère l'acces au champ texte à remplir
        $('#task').prop('disabled', acces);
}


$(document).ready(function() {
    // redonne l'accès à input et bouton play
    gererChampTexte(false);
    gererBoutonPlay(false);
    // bloque les bouton pauses et stop
    gererBoutonPause(true);
    gererBoutonStop(true);
    // actions du player
    $('#play').click(play);
    $('#pause').click(pause);
    $('#stop').click(stop);

 /*    $('#play').click(function(){
        DEPART_CHRONO = setInterval( DemarrerChrono, 1000);
        // bloque l'input pour ne pas modifier le nom de la tâche 
        $("#task").prop('disabled', true);
        //bloque le fait de pouvoir spammer le bouton play
        $('#play').prop('disabled', true);
        // redonne accès  pauses et stop
        $('#pause').prop('disabled', false);
        $('#stop').prop('disabled', false);

    });

    $('#pause').click(function() {
        clearInterval(DEPART_CHRONO);        
        $('.time').text( MINUTE + ":" + SECONDE);
        // redonne accès au bouton play
        $('#play').prop('disabled', false);
    });

    $('#stop').click(function() {
        clearInterval(DEPART_CHRONO);
        MINUTE = 0;
        SECONDE = 10;
        $('.time').text( MINUTE + ":" + SECONDE);
        // recupération TACHE et l'ajouter à la suite
        TACHE = $('#task').val();
        $('#done').append('<li class="list-group-item"><s>'+ TACHE + '</s></li>');
        // puis remettre cette valeur à vide
        $('#task').val("");
        //bloque pause et stop
        $('#pause').prop('disabled', true);
        $('#stop').prop('disabled', true);
        // incrémentation du nombres de tâches pour gérer les pauses
        NB_POMO++;
        // selon valeur NB_POMO, input et play ré-accessibles
        if ( NB_POMO === 4) {
            setTimeout(function() { 
                        $('#task').prop('disabled', false);
                        $('#play').prop('disabled', false);
                        }, 10000);
            NB_POMO = 0;
        }
        else setTimeout(function() { 
                        $('#task').prop('disabled', false);
                        $('#play').prop('disabled', false);
                        }, 5000);

    });
*/
});





