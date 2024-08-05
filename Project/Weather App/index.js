let searchBtn = document.getElementById("searchBtn");

let loc = document.getElementById("city");

// api handling

let apiKey = "6e93b3d15872f914c6929fed9ea71e9a";
let city = "Hyderabad";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
console.log(url);

function getWheatherDetails() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.name == undefined) data.name = "Hyderabad";
      loc.innerText = data.name;
      let temp = data.main.temp - 273.15;
      temp = Math.round(temp);
      document.getElementById("temp").innerText = temp;
    });
}

getWheatherDetails();

searchBtn.addEventListener("click", function () {
  let search = document.getElementById("search").value;
  city = search;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  console.log(url);

  getWheatherDetails();
  console.log(search);
});
