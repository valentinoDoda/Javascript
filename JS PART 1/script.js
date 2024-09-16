let firstName = "Valentin";
console.log(firstName);

// den epitrepetai to onoma ths metavlhths na arxizei ne gramma kefalaio kai leksh-kleidh

// Declare variables called country, continent and population 
// and assign their values according to your own country (population in millions).

let country, continent , population;
country = "Albania";
continent = "Europe";
population = "3.1 milion";
console.log(country, continent, population);


let massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;

[massJohn, massMark] = [92,78];
[heightJohn, heightMark] = [1.69, 1.95];

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark, bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

if(markHigherBMI){
    console.log(`Marks's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})!`);
}
else{
    console.log(`John's BMI (${bmiJohn}) is higher than Marks's BMI (${bmiMark})!`);
}


let scoreDolphins , scoreKoalas;

[scoreDolphins,scoreKoalas] = [96, 88];

if(scoreDolphins == scoreKoalas){
    console.log("Both win the trophy");
}
else{
    if(scoreDolphins > scoreKoalas){
        console.log("Dolphins win the trophy");
    }
    else{
        console.log("Koalas win the trophy");
    }
}


const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill > 49 && bill < 301 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);