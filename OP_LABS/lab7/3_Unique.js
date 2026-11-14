'use strict';

const unique = (array) => {
    const newArray = [];
    for (const item of array) {
        if (newArray.indexOf(item) === -1 ){
            newArray.push(item);
        }
    }
    return newArray;
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result); // Result: [2, 1, 3]