// SECTION MODAL
// Get the modal
var modal = document.getElementById("myModal");
var header = document.getElementById("header");
var main = document.getElementById("main");
var footer = document.getElementById("footer");

// Get the button that opens the modal
var btn = document.getElementById("btnContact");
var btn2 = document.getElementById("btnContact2");
var btn3 = document.getElementById("btnContact3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
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

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    header.classList.remove('blur');
    main.classList.remove('blur');
    footer.classList.remove('blur');
}

// When the user clicks anywhere outside of the modal, close it
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
patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
     return;
}

function checkForm() {
    prenom=document.getElementById('prenom');
    nom=document.getElementById('nom');
    email=document.getElementById('email');
    commentaire=document.getElementById('commentaire');
    error=false;

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
    if (error) {
        event.preventDefault();
        return false;
    }
    return true;
}