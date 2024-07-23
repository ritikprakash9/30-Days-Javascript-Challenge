// Task 1:

const isLoggedIn = false;

function authorizeUser() {
  return new Promise(function (resolve, reject) {
    if (isLoggedIn) {
      resolve("The user is autorized");
    }

    // task 2
    else {
      reject("The user is not autorized");
    }
  });
}

authorizeUser()
  .then(function (message) {
    setTimeout(() => {
      console.log(message);
    }, 2000);
  })
  .catch(function (message) {
    setTimeout(() => {
      console.log(message);
    }, 2000);
  });
