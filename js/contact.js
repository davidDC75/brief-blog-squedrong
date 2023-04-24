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