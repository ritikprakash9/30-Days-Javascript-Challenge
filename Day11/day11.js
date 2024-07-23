// Task 1:

const isLoggedIn = false;

function authorizeUser() {
  return new Promise(function (resolve, reject) {
    if (isLoggedIn) {
      resolve("The user is autorized");
    }
  });
}

authorizeUser()
  .then(function (message) {
    setTimeout(() => {
      console.log(message);
    }, 2000);
  })
  .catch(function () {
    setTimeout(() => {
      console.log(message);
    }, 2000);
  });
