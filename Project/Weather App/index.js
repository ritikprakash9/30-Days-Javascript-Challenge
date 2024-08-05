let loc = document.getElementById("city");
let apiKey = "6e93b3d15872f914c6929fed9ea71e9a";
let city = "Bhopal";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
console.log(url);

function getWheatherDetails() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.name);
      loc.innerHTML = data.name;
      let temp = data.main.temp - 273.15;
      temp = Math.round(temp);
      document.getElementById("temp").innerText = temp;
    });
}

getWheatherDetails();
let button = document.getElementById("search-btn");

let id = document.getElementById("para");
