"use strict";

function enterClicked() {
  // get user input values
  let userNum = parseInt(document.getElementById("user-integer").value);
  let maxNum = parseInt(document.getElementById("max-num").value);
  let minNum = parseInt(document.getElementById("min-num").value);

  let counter = "";
  
  if (maxNum < minNum) {
    Toastify({
      text: "Please enter a maximum number larger than the minimum number.",
      duration: 3000,
      close: true
    }).showToast();
    return;
  } else if (isNaN(userNum) || userNum <= 0) {
    Toastify({
      text: "Please enter a positive integer.",
      duration: 3000,
      close: true
    }).showToast();
    return;
  } else if (isNaN(maxNum)) {
    Toastify({
      text: "Please enter a maximum number.",
      duration: 3000,
      close: true
    }).showToast();
    return;
  } else if (isNaN(minNum)) {
    Toastify({
      text: "Please enter a minimum number.",
      duration: 3000,
      close: true
    }).showToast();
    return;
  }
  
  // loop to generate sentences
  for (let i = minNum; i <= maxNum; i++) {
    let result = userNum - i;
    counter += userNum + " - " + i + " = " + result + "<br>";
  }

  // display sentences
  document.getElementById("display-results").innerHTML = counter;
}
