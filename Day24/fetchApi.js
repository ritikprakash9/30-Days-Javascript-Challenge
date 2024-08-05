let url = "./user.json";

let para = document.getElementById("para");

function apiCall() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].id);
    });
}

apiCall();
