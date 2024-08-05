let unixTime = 1722817595;

let date = new Date(unixTime * 1000);

let apiKey = "c601b69c296302d00667163d4d0480ba";
let city = "Hyderabad";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

function sunRise() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.sys.sunrise);
      console.log(data.sys.sunset);
    });
}

sunRise();

let sunRiseTime = new Date(1722817595 * 1000);
let sunSetTime = new Date(1722863854 * 1000);

let time = setTimeout(() => {
  console.log(
    sunRiseTime.getHours() +
      ":" +
      sunRiseTime.getMinutes() +
      ":" +
      sunRiseTime.getSeconds()
  );
  console.log(
    sunSetTime.getHours() +
      ":" +
      sunSetTime.getMinutes() +
      ":" +
      sunSetTime.getSeconds()
  );
}, 5000);
