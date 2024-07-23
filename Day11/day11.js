// Task 1:

const isLoggedIn = true;

function authorizeUser() {
  return new Promise(function (resolve, reject) {
    if (isLoggedIn) {
      setTimeout(() => {
        resolve("The user is autorized");
      }, 2000);
    }

    // task 2
    else {
      setTimeout(() => {
        reject("The user is not autorized");
      }, 2000);
    }
  });
}

authorizeUser()
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });
