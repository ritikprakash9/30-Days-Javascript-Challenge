// Callback Function

let isPhoneStore = false;
let isPhoneAvailable = false;

function processMessage(resolveCallback, rejectCallback) {
  if (!isPhoneStore) {
    rejectCallback({
      name: "Wrong Store",
      message: "Sorry, this is a food store!",
    });
  } else if (!isPhoneAvailable) {
    rejectCallback({
      name: "Out of Stock",
      message: "Sorry, the phone you are looking is out of stock",
    });
  } else {
    resolveCallback({
      name: "OK",
      message: "The Phone is available, get it soon!",
    });
  }
}

processMessage(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
