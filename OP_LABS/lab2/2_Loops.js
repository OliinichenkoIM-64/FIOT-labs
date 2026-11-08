'use strict';
//ЗАВДАННЯ 4
let startN=15;
let endN=30;
const range = (startN , endN) => {
const numberArray = [startN];
while (startN<endN){
    startN = startN+1;
    numberArray.push(startN);
}
return numberArray;    
};

console.log(range(startN, endN));

//ЗАВДАННЯ 5
const rangeOdd = (startN, endN) => {
    const numberArray = [];
    while(startN<=endN){
        if (startN%2!==0){
            numberArray.push(startN);
        }
    startN++;
    }
    return numberArray;  
};
console.log(rangeOdd(startN, endN));