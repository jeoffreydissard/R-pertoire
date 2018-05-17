var Question = document.getElementById('question');
Question.addEventListener('click', (NewPage) => {
    if (Question.value == "option1") {
        document.getElementById('contenu').innerHTML = '<form>' +
            '<input type="text" name="nom" value="" id="nom" placeholder="Nom"/>' +
            '<input type="text" name="prenom" value="" id="prenom" placeholder="Prénom"/>' +
            '<input type="text" name="numero" value="" id="numero" placeholder="Numéro de téléphone"/>' +
            '<input type="submit" value="Ajouter le contact">';
    } else if (Question.value == "option2") {
        document.getElementById('contenu').innerHTML = "test2";
    } else if (Question.value == "option3") {
        document.getElementById('contenu').innerHTML = "test3";
    } else {
        document.getElementById('contenu').innerHTML = "rien";
    }
});