///Vars and QuerySelectors
var searchBtn = document.querySelector('.btn')
searchBtn.addEventListener('click',yelpApi)
var searchInput = document.querySelector('.search-bar').value








function yelpApi(){
////Yelp api
const options = {
    
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer vfgkv3uNaJ7w04xue0Ufm9QNGHG_wJw1eTd5mTpPHQrqtRVKzHy7xlIoq6XjB77G1sFz9n2AiDnKUmelVosa-EXZGVK57fpTyvPvP-MpeA5f9O9KaySkNME3nx0-ZHYx'
    },
    
  };
  
  fetch('https://cors-anywhere-jung.herokuapp.com/' + 'https://api.yelp.com/v3/businesses/search?location=NYC&sort_by=best_match&limit=15', options)
  .then (function (response) {
    return response.json();
})
.then (function (data) {
    displaySearch(data);
    // function displaySearch(data){
    // for(var i = 0 ;i < data.length;i++){
     
})
}
 // })
//})/
///Tasty api
const option = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '90ac447eabmsh4bf5f842aaa5395p1c6541jsn2d0820a0c05f',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};
fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=pizza', option)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  console.log("tasty");


   //Function for search event listioner
     function displaySearch(results){
    console.log(results)
      for(var i = 0 ;i < results.businesses.length;i++){
        console.log('hi')
       var businessname = results.businesses[i].name
        var tableRowEL = document.createElement('tr');
       var number = document.createElement('th');
       var listEL = document.createElement('th');
       var information = document.createElement('th');
        var alais = results.businesses[i].alais
       var mainTable = document.querySelector('.DTable')
       
      //  //Adding text
       number.textContent = "test"
       listEL.innerHTML = businessname;
       information.innerHTML = alais;
       //Appending Childs
       mainTable.appendChild(tableRowEL);
       tableRowEL.appendChild(number);
       tableRowEL.appendChild(listEL);
       tableRowEL.appendChild(information);
      


      // }

    }};
     