console.log ("text");


const options = {
    
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer vfgkv3uNaJ7w04xue0Ufm9QNGHG_wJw1eTd5mTpPHQrqtRVKzHy7xlIoq6XjB77G1sFz9n2AiDnKUmelVosa-EXZGVK57fpTyvPvP-MpeA5f9O9KaySkNME3nx0-ZHYx'
    },
    
  };
  
  fetch('https://cors-anywhere-jung.herokuapp.com/' + 'https://api.yelp.com/v3/businesses/search?location=NYC&sort_by=best_match&limit=20', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


    var recipes = 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=1b75e20facc84590ba826c63864d26c8'

    fetch (recipes)
    .then (function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data);
    
    })

    