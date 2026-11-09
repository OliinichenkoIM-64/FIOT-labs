'use strict';
//ЗАВДАННЯ 5
const sum = (...args) => {
    return args.reduce((sum, currentArg)=>sum+currentArg,0);
}

console.log(sum(1, 2, 3)); // a === 6
console.log(sum(0)); // b === 0
console.log(sum()); // c === 0
console.log(sum(1, -1, 1)); // d === 1
console.log(sum(10, -1, -1, -1)); // e === 7