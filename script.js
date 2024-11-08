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

const accounts = [account1, account2, account3, account4];

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
            <div class="movements__value">${value}  €</div>
          </div>
          
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displaySummary = (userLogin) => {
  value_In(userLogin.movements),
    value_Out(userLogin.movements),
    interestMoney(userLogin.movements);
};
//isplaySummary(value_In, value_Out, interestMoney);
function value_In(movements) {
  const totalIn = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${totalIn} €`;
}
function value_Out(movements) {
  const totalOut = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);
  labelSumOut.textContent = `${Math.abs(totalOut)} €`;
}
function interestMoney(movements) {
  const totalIn = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((dep) => dep >= 1)
    .reduce((acc, total) => {
      return acc + total;
    });
  labelSumInterest.textContent = `${totalIn} €`;
}

const user = "Steven Thomas Williams";
const userNames = function (user) {
  const userName = user
    .toLocaleLowerCase()
    .split(" ")
    .map((value) => {
      return value[0];
    })
    .join("");
  return userName;
};

accounts.forEach((value) => {
  value.userName = userNames(value.owner);
});

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

const deposits = function (movement) {
  const positives = movement.filter((value) => {
    return value > 0;
  });
  return positives;
};
accounts.forEach((value) => {
  value.positives = deposits(value.movements);
});
console.log(accounts);

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

/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]*/

const [dogsJulias, dogsKates] = [
  [3, 5, 2, 12, 7],
  [4, 1, 15, 8, 3],
];
const checkDogs = function (array1, array2) {
  let newArray1 = array1.slice(1, -2);
  const allDogs = newArray1.concat(array2);
  allDogs.forEach((dog, num) => {
    console.log(
      `Dog number ${num + 1} is  ${
        dog >= 3 ? `is an adult, and is ${dog} years old` : "is still a puppy"
      }`
    );
  });
};
checkDogs(dogsJulias, dogsKates);

const eurToUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});

const biggestMov = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(biggestMov);

/*
Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀*/
const calcAverageHumanAge = (...ages) => {
  const final = ages
    .map((age) => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => {
      return acc + age / arr.length;
    }, 0);
  return final;
};
console.log(calcAverageHumanAge(5, 2, 4, 1, 15, 8, 3));
console.log(calcAverageHumanAge(16, 6, 10, 5, 6, 1, 4));

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]*/

const balance = (user) => {
  user.balance = user.movements.reduce((acc, mov) => {
    return (acc += mov);
  }, 0);
};

const uptateUi = function (active) {
  displaySummary(active);
  balance(active);
  labelBalance.textContent = `${active.balance} €`;
  displayMovements(active);
};

let active;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  active = accounts.find(
    (account) =>
      account.userName == inputLoginUsername.value.trim() &&
      account.pin == inputLoginPin.value.trim()
  );
  if (active) {
    labelWelcome.textContent = `Welcome ${active.owner}`;
    uptateUi(active);
    containerApp.style.opacity = 1;
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = "User dont exist";
  }
});

function transferMoney() {
  
  if (active) {
    if (active.balance > Number(inputTransferAmount.value) && active.userName != inputTransferTo.value.trim()) {
      console.log("Right Balance");
      const accountTake = accounts.find(
        (account) => account.userName == inputTransferTo.value.trim()
      );
      balance(accountTake);
      accountTake.balance += Number(inputTransferAmount.value);
      active.balance = Number(inputTransferAmount.value) - balance(active);
      active.movements.push(-Number(inputTransferAmount.value));
      accountTake.movements.push(Number(inputTransferAmount.value));
      uptateUi(active);
      console.log(accountTake);
    } else {
      console.log("not enough money");
    }
  }
  inputTransferTo.value = inputTransferAmount.value = " ";
}

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  transferMoney();
});


btnClose.addEventListener('click' , function(e){
  e.preventDefault();
  if(inputCloseUsername.value.trim() == active.userName && Number(inputClosePin.value) == active.pin){
    const index = accounts.findIndex(user => user.userName == active.userName);
    accounts.splice(index,1);
    containerApp.style.opacity = 0;
  }
  else{console.log("You cant remove that");}
})