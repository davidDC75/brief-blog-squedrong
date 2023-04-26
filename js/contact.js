var modal = document.getElementById("myModal"); // Le modal
var header = document.getElementById("header"); // Le header
var main = document.getElementById("main"); // Le main
var footer = document.getElementById("footer"); // Le footer

// Les boutons pour ouvrir le modal
var btn = document.getElementById("btnContact");
var btn2 = document.getElementById("btnContact2");
var btn3 = document.getElementById("btnContact3");

// Le bouton close de la modal
var span = document.getElementsByClassName("close")[0];

// Ajout d'écoute d'événement pour les boutons d'ouverture de la modal
btn.onclick = function() {
    // On l'affiche
    modal.style.display = "block";
    // On applique un effet de flou
    header.classList.add('blur');
    main.classList.add('blur');
    footer.classList.add('blur');
}

btn2.onclick = function() {
    modal.style.display = "block";
    header.classList.add('blur');
    main.classList.add('blur');
    footer.classList.add('blur');
}

btn3.onclick = function() {
    modal.style.display = "block";
    header.classList.add('blur');
    main.classList.add('blur');
    footer.classList.add('blur');
}

// Gestion de la fermeture du modal en cliquant sur le bouton close
span.onclick = function() {
    modal.style.display = "none";
    header.classList.remove('blur');
    main.classList.remove('blur');
    footer.classList.remove('blur');
}

// Gestion de la fermeture de la modal en cliquant à l'extérieur de cette dernière
// Ne fonctionne pas pour le moment
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        header.classList.remove('blur');
        main.classList.remove('blur');
        footer.classList.remove('blur');
    }
}

// SECTION VALIDATION FORMULAIRE

// Regex pour format email
patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Fonction permettant d'injecter du style dans des élements
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
     return;
}

// Fonction qui check le formulaire
function checkForm() {
    // On récupére les élements du formulaire dans des variables
    prenom=document.getElementById('prenom');
    nom=document.getElementById('nom');
    email=document.getElementById('email');
    commentaire=document.getElementById('commentaire');
    error=false; // Notre flag pour la gestion d'erreur

    // Vérification du prénom
    if (prenom.value=='' || prenom.value.length>150) {
        css(document.querySelector('.prenomError'),{
            'visibility': 'visible',
        });
        css(prenom,{
            'background-color': '#D05270',
            'color': 'white'
        });
        error=true;
    } else {
        css(document.querySelector('.prenomError'),{
            'visibility': 'hidden'
        });
        css(prenom,{
            'background-color': '#CCCCCC',
            'color': 'black'
        });
    }

    // Vérification du nom
    if (nom.value=='' || nom.value.length>150) {
        css(document.querySelector('.nomError'),{
            'visibility': 'visible'
        });
        css(nom,{
            'background-color': '#D05270',
            'color': 'white'
        });
        error=true;
    } else {
        css(document.querySelector('.nomError'),{
            'visibility': 'hidden'
        });
        css(nom,{
            'background-color': '#CCCCCC',
            'color': 'black'
        });
    }

    // Vérification de l'email
    if (email.value=='' || nom.value.length>30 || email.value.match(patternEmail)== null) {
        css(document.querySelector('.emailError'),{
            'visibility': 'visible'
        });
        css(email,{
            'background-color': '#D05270',
            'color': 'white'
        });
        error=true;
    } else {
        css(document.querySelector('.emailError'),{
            'visibility': 'hidden'
        });
        css(email,{
            'background-color': '#CCCCCC',
            'color': 'black'
        });
    }

    // Vérification du commentaire
    if (commentaire.value=='' || commentaire.value.length>150) {
        css(document.querySelector('.commentaireError'),{
            'visibility': 'visible'
        });
        css(commentaire,{
            'background-color': '#D05270',
            'color': 'white'
        });
        error=true;
    } else {
        css(document.querySelector('.commentaireError'),{
            'visibility': 'hidden'
        });
        css(commentaire,{
            'background-color': '#CCCCCC',
            'color': 'black'
        });
    }

    // Gestion des erreurs
    if (error) {
        event.preventDefault(); // Si erreur alors on envoie pas le formulaire
        return false;
    }
    return true;
}