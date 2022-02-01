const express = require('express');
const app = express();
const morgan = require('morgan');
const recipeBank  = require('./recipeBank');
const path = require('path');

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const recipes = recipeBank.list()
    
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>Cooking Con Mucho Amor</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <div class="recipe-list">
            <header>Abuela's Favorite Recipes</header>
            <ul> ${recipes.map (recipe => {
                return 
                    `<li> 
                        ${recipe.title}
                    </li>`;
                })
            }
            </ul>
        </div>
    </body>
    </html>`

    res.send(html)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('listening on port ${port}');
});

