/*function getVals() {
    var elems = document.getElementById("formulaire").elements;
    var elemArray = new Object();
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].type == "text")
            elemArray[elems[i].id] = elems[i].value;
    }
    checkVals(elemArray);
    return false;
}

// check values
function checkVals(elemArray) {

    var str = "";
    for (var key in elemArray) {
        str+=key + "," + elemArray[key] + " ";
    }

    document.getElementById("result").innerHTML = str;
}*/


var NOM = "";
var PRENOM = "";
var NUMERO = "";

var NombreContact = 0;
var Question = document.getElementById('question');
Question.addEventListener('click', (NewPage) => {
    if (Question.value == "option1") {
        document.getElementById('contenu').innerHTML = '<form id="formulaire">' +
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

            var ListeContact = [];
            var LeContact = [NOM, PRENOM, NUMERO];
            var ListeContactLength = ListeContact.length;


            for (var i = 0; i < ListeContactLength; i++){
                ListeContact.push(LeContact[i]);
            }
            console.log(LeContact);
            alert(LeContact);
        });

    } else if (Question.value == "option2") {


        document.getElementById('contenu').innerHTML = '<h2>Liste de vos contact</h2>' +
            '<table id="Lecontact">' +
            '<tbody>' +
            '<tr><td>' + NOM + '</td></tr>' +
            '<tr><td>' + PRENOM + '</td></tr>' +
            '<tr><td>' + NUMERO + '</td></tr>' +
            '</tbody>' +
            '</table>';

    } else if (Question.value == "option3") {
        document.getElementById('contenu').innerHTML = '<h2>Vous avez ' + NombreContact + ' contact</h2>';
    } else {
        document.getElementById('contenu').innerHTML = "<h2>Choisir une option</h2>";
    }
});






/*

    var SPACE = 'buttonspace'; // Element ID of Blank Space field
    var NOM = document.getElementById('nom').value; // Field code of text field
    var PRENOM = document.getElementById('prenom').value; // Field code of text field
    var NUMERO = document.getElementById('numero').value; // Field code of number field
    var BUTTON = document.getElementById('numero');

    var TABLE = 'mytable'; // Field code of table field
    var TABLE_NOM = 'nom_in_table'; // Field code of text field in a table
    var TABLE_PRENOM = 'prenom_in_table'; // Field code of text field in a table
    var TABLE_NUMERO = 'numero_in_table'; // Field code of number field a table


        elSpace.addEventListener('click', function() {

            // add row with data into table
            var addData = {};
            addData.value = {};
            addData.value[TABLE_NOM] = {
                "type": "SINGLE_LINE_TEXT",
                "value": NOM
            };
            addData = {};
            addData.value = {};
            addData.value[TABLE_PRENOM] = {
                "type": "SINGLE_LINE_TEXT",
                "value": PRENOM
            };
            addData.value[TABLE_NUMERO] = {
                "type": "NUMBER",
                "value": NUMERO
            };
            TABLE.value.push(addData);

            console.log(addData);
            console.log(TABLE);
        });*/