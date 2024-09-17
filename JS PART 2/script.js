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