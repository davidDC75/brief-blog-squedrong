container = document.querySelector(".article-preview");
listeArticle = "";

data = [
    {
        "image": "article1.jpg",
        "lien":"article1.html", 
    
        "date": "13 JAN 2022",

        "title": "Lorem ipsum dolor sit amet",

        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mi facilisis libero sollicitudin vulputate. Mauris facilisis vestibulum nisi, at viverra arcu interdum id.",

        "more": "EN SAVOIR PLUS"
    },

    {
        "image": "article2.jpeg",
        "lien":"article1.html", 
    
        "date": "13 JAN 2022",

        "title": "Lorem ipsum dolor sit amet",

        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mi facilisis libero sollicitudin vulputate. Mauris facilisis vestibulum nisi, at viverra arcu interdum id.",

        "more": "EN SAVOIR PLUS"
    },
    {
        "image": "article1.jpg",
        "lien":"article1.html", 
    
        "date": "13 JAN 2022",

        "title": "Lorem ipsum dolor sit amet",

        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mi facilisis libero sollicitudin vulputate. Mauris facilisis vestibulum nisi, at viverra arcu interdum id.",

        "more": "EN SAVOIR PLUS"
    },

    {
        "image": "article2.jpeg",
        "lien":"article1.html", 
    
        "date": "13 JAN 2022",

        "title": "Lorem ipsum dolor sit amet",

        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mi facilisis libero sollicitudin vulputate. Mauris facilisis vestibulum nisi, at viverra arcu interdum id.",

        "more": "EN SAVOIR PLUS"
    },
    {
        "image": "article1.jpg",
        "lien":"article1.html", 
    
        "date": "13 JAN 2022",

        "title": "Lorem ipsum dolor sit amet",

        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mi facilisis libero sollicitudin vulputate. Mauris facilisis vestibulum nisi, at viverra arcu interdum id.",

        "more": "EN SAVOIR PLUS"
    },

    {
        "image": "article2.jpeg",
        "lien":"article1.html", 
    
        "date": "13 JAN 2022",

        "title": "Lorem ipsum dolor sit amet",

        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mi facilisis libero sollicitudin vulputate. Mauris facilisis vestibulum nisi, at viverra arcu interdum id.",

        "more": "EN SAVOIR PLUS"
    }
]



function article(image, lien, date, title, description, more) {
    return `<div class="article-preview-index-6">
                    <a href="${lien}"><img src="images/${image}" alt="article"></a>
                    <p class="post-date">${date}</p>
                    <a href="${lien}"><h3>${title}</h3></a>
                    <p class="article-description">${description}</p>
                    <a href="${lien}" class="view-more">${more}</a>
                </div>`
}

for(i=0; i<data.length; i++) {
    listeArticle = listeArticle + article(data[i].image, data[i].lien, data[i].date, data[i].title, data[i].description, data[i].more);
}

container.innerHTML = listeArticle;