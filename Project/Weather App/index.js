let searchBtn = document.getElementById("searchBtn");

let loc = document.getElementById("city");

// api handling

let apiKey = "c601b69c296302d00667163d4d0480ba";
let city = "Hyderabad";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
console.log(url);

function getWheatherDetails() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.cod == "404") {
        alert("City not found");
      }
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
