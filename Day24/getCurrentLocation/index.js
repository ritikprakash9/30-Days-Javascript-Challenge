let latitude = 0;
let longitude = 0;

let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;

let ans = "";
const result = navigator.geolocation.getCurrentPosition(
  (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude, longitude);
    url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;

    function getCurrentLocation() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => (ans = ans + data.city));
    }

    getCurrentLocation();
    document.getElementById("btn").addEventListener("click", result);
  },
  () => {
    console.log("Some issue");
  }
);

console.log("Result = " + ans);
