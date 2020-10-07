var cityInput = document.querySelector("#city-text");
var weatherForm = document.querySelector("#weather-form");
var cityList = document.querySelector("#city-list");
var CityCountSpan = document.querySelector("#city-count");

var citiesInStorage = localStorage.getItem("city");
var cities = [];

if( citiesInStorage !== null){
    cities = JSON.parse(citiesInStorage)
}

//var cities = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
//write a render function that looks at state and displays the items on the screen
function renderList(){
    cityList.innerHTML = "";
    for(var i=0; i<cities.length; i++){
        var liTag = document.createElement("li");
        liTag.textContent = cities[i];
        var button = document.createElement("button");
        button.textContent = "clear";
        button.setAttribute("data-idx", i);
        liTag.appendChild(button);
        cityList.appendChild(liTag);
        saveToLocalStorage();
    }
}
//write a function that adds a new item to the array, then calls the render function.
function addItem(e){
    e.preventDefault();
    var itemToAdd = cityInput.value.trim();
    if(itemToAdd.length ){
        cities.push(itemToAdd);
    }else{
        alert("Enter a city, and check the weather!");
    }
    cityInput.value = "";
    renderList();
}
//write an eventListener for when the form is submitted.
weatherForm.addEventListener("submit", addItem)

//Write One event listener for all the complete buttons
cityList.addEventListener("click", function(e){
    e.preventDefault();
    if(e.target.matches("button") ){
        //console log the index value of the list item.
        var idx = e.target.getAttribute("data-idx");
        //delete item from array by its index value.
        cities.splice(idx, 1);
        renderList();
    }
});

function saveToLocalStorage(){
    localStorage.setItem("city", JSON.stringify(cities));
}
renderList();