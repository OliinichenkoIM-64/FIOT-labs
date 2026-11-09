'use strict';
//ЗАВДАННЯ 3
const sum = (...args) => {
    let answer=0;
    let i=0;
    while (i<(args.length)){
        answer=answer+args[i];
        i++;
    }
    return answer;
}

console.log(sum(1, 2, 3)); // a === 6
console.log(sum(0)); // b === 0
console.log(sum()); // c === 0
console.log(sum(1, -1, 1)); // d === 1
console.log(sum(10, -1, -1, -1)); // e === 7