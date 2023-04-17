console.log ("text");

// Spoonacular API: apiKey=1b75e20facc84590ba826c63864d26c8
// Use this key when using the fetch function

var recipes = 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=1b75e20facc84590ba826c63864d26c8'

fetch (recipes)
.then (function (response) {
    return response.json();
})
.then (function (data) {
    console.log(data);
    
})