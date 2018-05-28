var NOM = "";
var PRENOM = "";
var NUMERO = "";
function LeContact(NOM, PRENOM, NUMERO){ // Objet LeContact
    this.NOM = NOM;
    this.PRENOM = PRENOM;
    this.NUMERO = NUMERO;
};
var key = 0;
var Question = document.getElementById('question');
Question.addEventListener('click', (NewPage) => {           //Fonction qui change la page avec les if, else if et else
    if (Question.value == "option1") {                      // Page ajouter un contact
        document.getElementById('contenu').innerHTML = '<h2>Ajouter un contact</h2>' +
            '<form id="formulaire" method="post">' +
            '<input type="text" name="nom" value="" id="nom" placeholder="Nom"/>' +
            '<input type="text" name="prenom" value="" id="prenom" placeholder="Prénom"/>' +
            '<input type="text" name="numero" value="" id="numero" placeholder="Numéro de téléphone"/>' +
            '<input type="button" id="Boutton" value="Ajouter un contact"/>' +
            '</form>';
        var Boutton = document.getElementById('Boutton');
        Boutton.addEventListener('click', (NouveauContact) => {   // Fonction qui ajoute un nouveau contact dans l'objet
            NOM = document.getElementById('nom').value;
            PRENOM = document.getElementById('prenom').value;
            NUMERO = document.getElementById('numero').value;
            ++key;

            LeContact[key] = new LeContact(NOM, PRENOM, NUMERO);

            console.log(LeContact[key]);
        });

    } else if (Question.value == "option2") {        // Page Liste de contact
        document.getElementById('contenu').innerHTML = '<h2>Liste de vos contact</h2>' +
            '<div id="ListeContact"></div>';

        for (var i = 1; i < key+1; i++) {               // Boucle qui permet d'afficher les contacts
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
    } else if (Question.value == "option3") {       // Page nombre de contact
        document.getElementById('contenu').innerHTML = '<h2>Vous avez ' + key + ' contact</h2>';
    } else {     // Page d'accueil
        document.getElementById('contenu').innerHTML = "<h2>Choisir une option</h2>";
    }
});