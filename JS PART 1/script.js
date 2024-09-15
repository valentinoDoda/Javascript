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
