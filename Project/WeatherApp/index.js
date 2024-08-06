let searchBtn = document.getElementById("searchBtn");

let loc = document.getElementById("city");

//get current location

let currentLocation = "1";
let latitude = 0;
let longitude = 0;
let locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;

let loca = navigator.geolocation.getCurrentPosition(
  (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;

    function getCurrentPosition() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data.city));
    }

    getCurrentPosition();

    currentLocation = console.log(getCurrentPosition());
  },
  () => {
    console.log("Some Error");
  }
);

console.log(currentLocation);
// api handling

let apiKey = "c601b69c296302d00667163d4d0480ba";
let city = "Hyderabad";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

function getWheatherDetails() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == "404") {
        alert("City not found");
      }

      let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("img").setAttribute("src", icon);
      loc.innerText = data.name;
      let temp = data.main.temp - 273.15;
      temp = Math.round(temp);
      document.getElementById("temp").innerText = temp;
      console.log(data);
      console.log(data.weather[0].description);
    });
}

searchBtn.addEventListener("click", function () {
  let search = document.getElementById("search").value;
  city = search;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  getWheatherDetails();
});
