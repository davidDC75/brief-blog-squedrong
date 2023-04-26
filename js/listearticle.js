let requestURL = 'js/data.json'; // Url du fichier json
let request= new XMLHttpRequest(); // Nouvelle XMLHttpRequest
request.open('GET', requestURL); // On prépare la request
request.responseType='json';
request.send(); // On envoie la request


// Le container qui va contenir la liste des articles
container = document.querySelector(".article-preview");

// Notre liste des articles
listeArticle = "";

// La fonction article génére un article seulement
function article(image, lien, date, title, description, more) {
    return `<div class="article-preview-index-6">
                    <a href="${lien}"><img src="images/${image}" alt="article"></a>
                    <p class="post-date">${date}</p>
                    <a href="${lien}"><h3>${title}</h3></a>
                    <p class="article-description">${description}</p>
                    <a href="${lien}" class="view-more">${more}</a>
                </div>`
}

// Après l'envoie de la request
request.onload = function() {
    // On stocke les données reçues
    let data = request.response;

    // On parcour les éléments du tableau
    for(i=0; i<data.length; i++) {
        // On concaténe un article sur la liste
        listeArticle = listeArticle + article(data[i].image, data[i].lien, data[i].date, data[i].title, data[i].description, data[i].more);
    }

    // On inject le html dans le container
    container.innerHTML = listeArticle;
}