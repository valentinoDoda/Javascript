"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const displayMovements = function (movement) {
  containerMovements.innerHTML = " ";
  let type = ``;
  movement.movements.forEach((value, index) => {
    (function () {
      type = value > 0 ? "deposit" : "withdrawal";
    })();
    const html = `
    <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type.toUpperCase()}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${value}</div>
          </div>
          
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const accounts = [account1, account2, account3, account4];
displayMovements(account1);

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

//forEach Map and Set
currencies.forEach((value, key, map) => {
  console.log(key + " :", value);
});

const currenciesUnique = new Set();
currencies.forEach((value, key) => currenciesUnique.add(key));
console.log(currenciesUnique);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((move, index, entireArray) =>
  console.log(
    "Κίνηση " + (index + 1),
    move > 0 ? `Κατάθεση : ${move}` : `Ανάληψη: ${Math.abs(move)}`
  )
);
/////////////////////////////////////////////////

//slice
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice());

//splice
//Λειτουργει με τον ιδιο τροπο οπως το slice με την διαφορα οτι αυτο αντι να επιστρέπει απλα την τιμη αλλάζει και τον αρχικό πίνακα

//reverse
let arr2 = [].concat(arr); // Επιστρέφει και αλλάζει τον αρχικό πίνακα με αντιστροφή σειρά
arr2.reverse();
console.log(arr2, arr);
//concat

const letters = arr.concat(arr2); //

// join
console.log(letters.join("-"));
console.log(letters);

const nums = [23, 13, 14.2];

//at
console.log(nums.at(-1));
console.log(nums.at(1));
console.log(nums.at(2));
