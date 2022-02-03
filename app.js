const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const postData = [
    {title: "Vegan Alcapurrias", desc: "A healthy take on a classic snack.", author: "Walter Mercado", date: "Updated January 20, 2022", rating: "4.5", reviews: "100", recipe: "recipe blah blah"},
    {title: "Arroz Con Pollo", author: "Rita Moreno", rating: "4.3", reviews: "100", recipe: "recipe blah blah"},
    {title: "Crab Empanadas", author: "Benito Martinez Ocasio", rating: "4.9", reviews: "100", recipe: "recipe blah blah"},
    {title: "Yuca Pasteles", author: "Jennifer Lopez", rating: "4.5", reviews: "100", recipe: "recipe blah blah"},
    {title: "Coconut Flan", author: "Ricky Martin", rating: "4.8", reviews: "100", recipe: "recipe blah blah"},
]

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'style')));

app.get('/', (req, res) => {
 //   const recipes = recipeBank.list()
    
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>Cooking Con Mucho Amor</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <div class="recipe-list">
            <header><h1>Abuela's Favorite Recipes</h1></header>
            ${postData.map (recipe => `
                <div class="recipe-item">
                    <p class="title">
                        <a href="/recipes/${recipe.id}">${recipe.title}</a> <span class="recipe-desc">${recipe.desc}</span>
                    </p>
                    
                    <small class="recipe-info">
                            By: ${recipe.author} | Rating: ${recipe.rating} (${recipe.reviews})
                    </small>
                </div>`
                ).join("")}
        
        </div>
    </body>
    </html>
    `

    res.send(html);
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.title;
    const recipe = postData.find(id);
    const posts = [recipe];

    const postHtml = `
    <html>
        <head>
        </head>
        <body>
            <header><h1>${recipe.title} </h1> </header>
        </body>
    </html>
    `;

    res.send(postHtml);

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('listening on port ${PORT}');
});

