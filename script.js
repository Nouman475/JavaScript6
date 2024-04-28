let input = document.getElementById("input");
let outputBox = document.getElementById("result");
const daysOfWeak = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let orgBox = document.getElementById("original");

orgBox.innerHTML = "<h4>" + new Date() + "</h4>";

/*BASIC FUNCTIONS*/

function clear0() {
  if (input.value === "") {
    Toastify({
      text: "Already Cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color: "black",
      },
      onClick: function () {},
    }).showToast();
  } else {
    Toastify({
      text: "Input value cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#178da6",
      },
      onClick: function () {},
    }).showToast();
  }
  input.value = "";
}

function clear1() {
  if (outputBox.innerHTML === "") {
    Toastify({
      text: "Already Cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color: "black",
      },
      onClick: function () {},
    }).showToast();
  } else {
    Toastify({
      text: "Output value cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#178da6",
      },
      onClick: function () {},
    }).showToast();
    outputBox.innerHTML = "";
  }
}

function showOutput(res) {
  outputBox.innerHTML = res;
}

function todayName() {
  let todayIdx = new Date().getDay();
  showOutput(daysOfWeak[todayIdx]);
}

function daysPassed() {
  if (!input.value) {
    Toastify({
      text: "Please enter your Birthday!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color: "black",
      },
      onClick: function () {},
    }).showToast();
  } else {
    outputBox.innerHTML = "";
    let birthday = input.value;
    birthday = new Date(birthday).getTime();
    let rightNow = new Date().getTime();
    let daysPassed = (rightNow - birthday) / (1000 * 60 * 60 * 24);
    daysPassed = Math.floor(daysPassed);
    let HTML = `<h4><span style="color:green">${daysPassed}</span> days have been passed since you born, hope you live a long and happy life, Ameen!</h4>`;
    showOutput(HTML);
  }
}

function nextBdy() {
  outputBox.innerHTML = "";
  const birthday = new Date(input.value);
  const today = new Date();
  let HTML = `<h3>Today is ${today} and you next birthday will be on, ${birthday}</h3>`;
  showOutput(HTML)
}

function greetUser() {
  outputBox.innerHTML = "";
  let user = prompt("Hey, Whats your name?");
  let hours = new Date().getHours();
  let msg;
  if (hours >= 5 && hours <= 11) {
    msg = "Good Morning";
  } else if (hours > 11 && hours <= 13) {
    msg = "Good Noon";
  } else if (hours > 13 && hours <= 16) {
    msg = "Good Afternoon";
  } else if (hours > 13 && hours <= 19) {
    msg = "Good Evening";
  } else if (hours > 19 && hours < 5) {
    msg = "Good Night";
  }
  let HTML = `<h2><span style="color:#005f73">${msg} ${user}</span>, Whats up!</h2>`;
  showOutput(HTML);
}

function time1() {
  outputBox.innerHTML = "";
  let rightNow = new Date();
  showOutput(rightNow);
}

function time2() {
  outputBox.innerHTML = "";
  let rightNow = new Date();
  showOutput(rightNow);
}

function time3() {
  outputBox.innerHTML = "";
  let rightNow = new Date();
  showOutput(rightNow);
}

function calTax() {
  let taxRate = +prompt("Enter tax rate");
  let price = +prompt("Enter the price");
  const tax = price * (taxRate / 100);
  let HTML = `<h2><span style="color:red">${tax} PKR </span>is tax with a rate of <span style="color:orange">${taxRate}% </span>, on price <span style="color:green">${price} PKR </span>.</h2>`;
  showOutput(HTML);
}

function calTotal() {
  let taxRate = +prompt("Enter tax rate (%)");
  let price = +prompt("Enter the price (PKR)");
  const tax = price * (taxRate / 100);
  const total = price + tax;
  let HTML = `<h2><span style="color:red">${tax} PKR </span>is tax with a rate of <span style="color:orange">${taxRate}% </span>, on price <span style="color:green">${price} PKR </span> and the total amount is <span style="color:#005f73">${total} PKR</span>.</h2>`;
  showOutput(HTML);
}
