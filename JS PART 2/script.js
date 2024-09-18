'use strict';

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


const calcTip = (bill) => { 
    const tip = (bill > 49 && bill < 299) ? bill * 0.15 : bill * 0.2;
    return tip;
}

const bills = [125, 555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`These are the bills ${bills} these are the tips ${tips} and the totals ${totals}`);