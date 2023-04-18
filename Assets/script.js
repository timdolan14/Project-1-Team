console.log ("text");

// Spoonacular API: apiKey=1b75e20facc84590ba826c63864d26c8
// Use this key when using the fetch function



// const options = {method: 'GET', headers: {accept: 'application/json'},mode:"no-cors"};


// fetch('https://api.content.tripadvisor.com/api/v1/location/locationId/photos?language=en&key=5371E356F60B4070A64F378CA0C8F545', options)
//    .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

//   const options = {method: 'GET', headers: {accept: 'application/json', Authorization: ''}};

//   fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    const options = {method: 'GET', headers: {accept: 'application/json', Bearer: 'vfgkv3uNaJ7w04xue0Ufm9QNGHG_wJw1eTd5mTpPHQrqtRVKzHy7xlIoq6XjB77G1sFz9n2AiDnKUmelVosa-EXZGVK57fpTyvPvP-MpeA5f9O9KaySkNME3nx0-ZHYx.'}};

fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));