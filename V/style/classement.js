/* CLASSES  */
class Joueur {
    constructor(nPseudo, nScore, nNbPartie) {
        this.Pseudo = nPseudo;
        this.Score = nScore;
        this.NbPartie = nNbPartie;
    }
}

/* DONNEES */

var joueurs = [];




/* FONCTIONS */





function MAJClassement() {
    joueurs = [];
    console.log("debut ajax");
    $.ajax({
        url: './C/traitement.php',
        data: 'action=getClassement',
        dataType: 'json',
        cache: false,
        success: function(data) {
            console.log("succes ", data);
            data.forEach(function(item) {
                j = new Joueur(item.nomJoueur, item.scoreJoueur, item.nombrePartie);
                joueurs.push(j);
            });
        },
        error: function(request, error) { // Info Debuggage si erreur         
            alert("Erreur : responseText: " + request.responseText);
        },
    });
}

function afficherClassement() {
    chaine = "<table><thead><tr><th>No</th><th>Pseudo</th><th>Score</th><th>Nombre de partie</th></tr></thead><tbody>";
    for (var i = 0; i < joueurs.length; i++) {
        chaine += "<tr><td>#" + (i + 1) + "</td><td>" + joueurs[i].Pseudo + "</td><td>" + joueurs[i].Score + "</td><td>" + joueurs[i].NbPartie + "</td></tr>";
    }
    chaine += "</tbody></table>";
    $("#tabClassement").html(chaine);
}

MAJClassement();
$("#rechargerClassement").click(function() {
    chaine = "<table><thead><tr><th width='10%'>No</th><th width='30%'>Pseudo</th><th width='20%'>Score</th><th width='10%'>Nombre de partie</th></tr></thead><tbody>";
    for (var i = 0; i < joueurs.length; i++) {
        chaine += "<tr><td class='noClassement'>#" + (i + 1) + "</td><td>" + joueurs[i].Pseudo + "</td><td>" + joueurs[i].Score + "</td><td>" + joueurs[i].NbPartie + "</td></tr>";
    }
    chaine += "</tbody></table>";
    $("#tabClassement").html(chaine);
});