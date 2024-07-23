const isPhoneStore = true;
const isPhoneAvailable = false;

function processMessage() {
  return new Promise((resolve, reject) => {
    if (!isPhoneStore) {
      reject({
        name: "Wrong Store",
        message: "Sorry, this is a food store!",
      });
    } else if (!isPhoneAvailable) {
      reject({
        name: "Out of Stock",
        message: "Sorry, the phone you are looking is out of stock",
      });
    } else {
      resolve({
        name: "OK",
        message: "The Phone is available, get it soon!",
      });
    }
  });
}

processMessage()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
