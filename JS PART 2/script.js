'use strict';
/*
const calcAverage = (score1, score2, score3) => {
    return (score1+score2+score3)/3;
}
let scoreDolphins, scoreKoalas;
[scoreDolphins, scoreKoalas] = [calcAverage(44,23,71), calcAverage(65,54,49)];

function checkWinner (avgDolphins, avgKoalas){
    if(avgDolphins === avgKoalas){
        console.log("No team wins...");
    }
    else {
        if(avgKoalas > avgDolphins){
            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        }
        else{
            console.log(`Deplhins win (${avgDolphins} vs. ${avgKoalas})`);
        }
    }
}

checkWinner(scoreDolphins,scoreKoalas);

*/
/*
const calcTip = (bill) => { 
    const tip = (bill > 49 && bill < 299) ? bill * 0.15 : bill * 0.2;
    return tip;
}

const bills = [125, 555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`These are the bills ${bills} these are the tips ${tips} and the totals ${totals}`);
*/




// Challenge while watching the course

/*
'Jonas has 3 friends , and his favourite is called Michael'
*/
/*
const valentin = {
    firstName : 'Valentin',
    lastName : 'Doda',
    age : 21 ,
    friends : ['emil', 'katyr', 'nikos'],
    job : 'Programmer',
    driverLicense : true,
    showLicense : function (){
        console.log(this.firstName);
        return `${this.firstName} is ${this.age}-years old and ${this.driverLicense ? 'he has' : 'he has not'} driver's license`;

    }
};
console.log(`${valentin.firstName} has ${valentin.friends.length} friends , and his favourite is called ${valentin.friends[0]}`);



// CHALLENGE WHILE WATHCING OBJECTS METHODS
// Jonas is 46-years old and he has driver's license 

console.log(valentin.showLicense());

*/



// Coding Exercise 7: CHALLENGE #3
/*
const mark = {
    fullName : "Mark Miller",
    mass : 78 ,
    height : 1.69 ,
    calcBmi : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi; 
    }
}
const john = {
    fullName : "John Smith",
    mass : 92 ,
    height : 1.95 ,
    calcBmi : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi; 
    }
}

console.log(`${john.calcBmi() > mark.calcBmi() ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`: `${mark.fullName}'s (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!` }`)

*/
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const calcAverage = (arr) =>{
      let sum = 0;
      for(let i = 0 ; i < arr.length; i++){
          sum += arr[i];
      }
      return sum / arr.length;
  }

  /* Write your code below. Good luck! 🙂 */
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals =[];
  for(let i=0; i < bills.length; i++){
      tips.push(calcTip(bills[i]));
      totals.push(tips[i] + bills[i]);
  }
  console.log(totals);
  console.log(calcAverage([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]));
