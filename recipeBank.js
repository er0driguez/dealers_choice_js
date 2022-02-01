const postData = [
    {title: "Vegan Alcapurrias", author: "Walter Mercado", rating: "4.5", recipe: "recipe blah blah", date: new Date()},
    {title: "Arroz Con Pollo", author: "Rita Moreno", rating: "4.3", recipe: "recipe blah blah", date: new Date()},
    {title: "Crab Empanadas", author: "Benito Ocasio", rating: "4.9", recipe: "recipe blah blah", date: new Date()},
    {title: "Rice and Beans", author: "Jennifer Lopez", rating: "4.5", recipe: "recipe blah blah", date: new Date()},
    {title: "Coconut Flan", author: "Ricky Martin", rating: "4.8", recipe: "recipe blah blah", date: new Date()}
]

const list = () => {
    return [...postData]
};


module.exports = {list};