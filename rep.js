var NOM = "";
var PRENOM = "";
var NUMERO = "";
function LeContact(NOM, PRENOM, NUMERO){
    this.NOM = NOM;
    this.PRENOM = PRENOM;
    this.NUMERO = NUMERO;
};

var key = 0;
var LeContactkey = "LeContact";
var LeContactLength = LeContact.length;
var Question = document.getElementById('question');
Question.addEventListener('click', (NewPage) => {
    if (Question.value == "option1") {
        document.getElementById('contenu').innerHTML = '<form id="formulaire" method="post">' +
            '<input type="text" name="nom" value="" id="nom" placeholder="Nom"/>' +
            '<input type="text" name="prenom" value="" id="prenom" placeholder="Prénom"/>' +
            '<input type="text" name="numero" value="" id="numero" placeholder="Numéro de téléphone"/>' +
            '<input type="button" id="Boutton" value="Ajouter un contact"/>' +
            '</form>';
        var Boutton = document.getElementById('Boutton');
        Boutton.addEventListener('click', (NewArray) => {
            NOM = document.getElementById('nom').value;
            PRENOM = document.getElementById('prenom').value;
            NUMERO = document.getElementById('numero').value;
            /*LeContactkey = ("LeContact" + key);*/
            ++key;

            LeContact[key] = new LeContact(NOM, PRENOM, NUMERO);

            console.log(LeContact[key]);
        });

    } else if (Question.value == "option2") {
        document.getElementById('contenu').innerHTML = '<h2>Liste de vos contact</h2>' +
            '<div id="ListeContact"></div>';
        ;

        for (var i = 1; i < LeContactLength+1; i++) {
            var div = document.createElement('div');
            div.innerHTML = '<table>' +
                '<tbody>' +
                '<tr><td>' + LeContact[i].NOM + '</td></tr>' +
                '<tr><td>' + LeContact[i].PRENOM + '</td></tr>' +
                '<tr><td>' + LeContact[i].NUMERO + '</td></tr>' +
                '</tbody>' +
                '</table>';
            document.getElementById('ListeContact').appendChild(div)
        }
    } else if (Question.value == "option3") {
        document.getElementById('contenu').innerHTML = '<h2>Vous avez ' + key + ' contact</h2>';
    } else {
        document.getElementById('contenu').innerHTML = "<h2>Choisir une option</h2>";
    }
});