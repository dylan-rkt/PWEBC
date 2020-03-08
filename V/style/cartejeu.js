/* Type de classes */
class Station {
    constructor(name, line, stationnumber) {
        this.nomS = name;
        this.ligneS = line;
        this.noGare = stationnumber;
    }

    getNom() {
        return this.nomS;
    }
    getLigne() {
        return this.ligneS;
    }
    getNo() {
        return this.ligneS;
    }
}

class Partie {
    constructor(nbTourVoulu, pseudo) {
        this.noEnCours = 0;
        this.scoreEnCours = 0;
        this.nbTourMax = nbTourVoulu;
        this.noTour = 1;
        this.login = pseudo;
        this.commence = false;
        console.log(this.noTour);
        console.log(this.nbTourMax);
        this.actualiserAffichage();
    }

    changerQuestion() {
        partie.commence = true;
        if (partie.noTour < partie.nbTourMax) {
            stations.pop();
            partie.noEnCours = Math.floor(Math.random() * Math.floor(stations.length));
            console.log(partie.noEnCours + " = " + stations[partie.noEnCours].nomS + " ?");
            $("#question").html("<h1 class='question'>Où se situe...</h1> <h1  class='station'>" + stations[partie.noEnCours].nomS + "</h1><h1 class='question'>?</h1>");
        } else {
            finPartie();
            //$("#question").html("<center><button class='action' id='rejouer'>Rejouer</button></center>");
            Dialog.alert('Fin de partie', 'Vous avez fini ' + partie.login + ', Voulez vous sauvegarder votre score(' + this.scoreEnCours + ')')
                .then(function() {
                    $.ajax({
                        url: './C/traitement.php',
                        type: 'GET',
                        data: 'action=setScore&pseudo=' + partie.login + '&score=' + partie.scoreEnCours,

                        dataType: 'html'
                    });
                    init();
                }, function() {
                    init();
                });

        }
    }

    verifier(id) {
        if (partie.commence == false) {
            Dialog.alert('Erreur', "Vous n'avez pas encore commencé la partie");
            return;
        }
        if (stations[this.noEnCours].nomS == id) {

            Dialog.alert("Bonne réponse", "pour " + stations[partie.noEnCours].nomS);
            partie.scoreEnCours++;
        } else {
            Dialog.alert("Mauvaise réponse", "pour " + stations[partie.noEnCours].nomS);
        }
        this.changerQuestion();
        this.noTour++;
        this.actualiserAffichage();
    }
    actualiserAffichage() {
        $("#score").html("<h2>Score:</h2><br />" + this.scoreEnCours + " / " + (this.noTour - 1));
        $("#tour").html("<h2>Tour:</h2><br />" + this.noTour + " sur " + this.nbTourMax);
    }

}

/* Données */
var partie;
var stations = [];


/* CREATION CARTE */
function chargerCarteJeu() {
    partie.commence = false;
    $(".infoJeu").css({ 'background-color': 'rgba(0, 0, 0, 0.5)', 'border-radius': ' 10px', 'text-align': 'center', 'border': '3px solid #fff', 'color': '#fff' });
    var map = L.map('maDiv', {
        zoomDelta: 0.9,
        zoomSnap: 0
    }).setView([48.858376, 2.294442], 12);
    map.options.minZoom = 12;
    map.options.maxZoom = 17;
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map);
    $.ajax({
        url: './C/traitement.php',
        data: 'action=getGEOJSON&ligne=7',
        dataType: 'json',
        cache: false,
        success: function(data) {
            var layerGroup = L.geoJson(data, {
                onEachFeature: function(feature, layer) {
                    layer.bindPopup('<h1 class="station">???' /* + feature.properties.nomlong */ + '</h1>' + afficherLignes(feature.properties.res_com) + '</br><button class="action validerchoix" type="button" id="' + feature.properties.nomlong + '" onClick="partie.verifier(this.id)">Valider</button>');
                    stations.push(new Station(feature.properties.nomlong, feature.properties.res_com, feature.properties.gares_id));
                }
            }).addTo(map);
        },
        error: function(request, error) { // Info Debuggage si erreur         
            console.log("Erreur : responseText: " + request.responseText);
        },
    });
    $("#question").html("<button id='start' class='action' >Commencer La Partie</button>");
    $("#start").click(partie.changerQuestion);
}

function afficherLignes(propriete) {
    var result = propriete.split("/");
    var retour = "";
    result.forEach(function(obj) {
        retour += "<img class='ligne' src='./V/images/lignes/" + obj.trim() + ".png' alt=" + obj.trim() + "/>";
    });
    return retour;
}

function afficherstations() {
    console.log(stations);
}

function connexion() {
    if (login = " ") {
        Dialog.prompt('Id', 'Donne nous ton pseudo')
            .then(function(value) {
                if(value != ""){
                    partie = new Partie($('#tbNbTour').val());
                    partie.login = value;
                    console.log('ton pseudo est : ' + partie.login);
                    chargerCarteJeu();
                    //AJOUTER VERIFICATION PSEUDO ET CHARGER LE MDP DANS UNE VARIABLE
                }
                else {
                    alert("Entrez un nom");
                }
            }, function() {
                console.log("You clicked Cancel");
            });
    }
}



function finPartie() {
    $('#maDiv').html("");
}

$(document).ready(function() {
    finPartie();
    $("#rejouer").click(function() { window.location.replace('index.php?p=jeu'); });
    $(".infoJeu").css({});
    $("#question").html("<center><input type='number' id='tbNbTour' name='tbNbTour' step='1' value='10' min='3' max='300'><br/><button class='action' id='connexion'>Commencer</button></center>");
    $("#connexion").click(function() { nbPartieCorrect() })
        /*afficherstations();
        $("#afficher").click(chargerCarteJeu);*/
});

// Remplacé par le document ready

/*INIT*/

function nbPartieCorrect() {
    if (tbNbTour.value > 2) {
        connexion();
    } else {
        Dialog.alert('Nombre de partie incorrect', "Vous devez jouer au moins 3 tours.");
    }
}