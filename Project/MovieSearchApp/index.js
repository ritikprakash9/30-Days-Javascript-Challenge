/*
    Title:
    Year:
*/

let button = document.getElementById("btn");

function getMovieDetails() {
  let movieName = document.getElementById("search").value;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=f2a5b7a3`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("movieTitle").innerText = data.Title;
      document.getElementById("releaseYear").innerText = data.Year;
      document.getElementById("poster").setAttribute("src", data.Poster);
      console.log(document.getElementById("poster"));
    });
  console.log(movieName);
}

button.addEventListener("click", getMovieDetails);
