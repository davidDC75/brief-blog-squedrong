let requestURL = 'js/data.json'; // Nom de ton fichier
let request= new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType='json';
request.send();


container = document.querySelector(".article-preview");
listeArticle = "";

function article(image, lien, date, title, description, more) {
    return `<div class="article-preview-index-6">
                    <a href="${lien}"><img src="images/${image}" alt="article"></a>
                    <p class="post-date">${date}</p>
                    <a href="${lien}"><h3>${title}</h3></a>
                    <p class="article-description">${description}</p>
                    <a href="${lien}" class="view-more">${more}</a>
                </div>`
}

request.onload = function() {
    let data = request.response;
    for(i=0; i<data.length; i++) {
        listeArticle = listeArticle + article(data[i].image, data[i].lien, data[i].date, data[i].title, data[i].description, data[i].more);
    }
    container.innerHTML = listeArticle;
}