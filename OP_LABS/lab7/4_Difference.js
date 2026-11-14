'use strict';

const difference = (array1, array2) =>{
    const newArray =[];
    for (const item of array1) {
        if (array2.indexOf(item)===-1 ){
            newArray.push(item);
        }
    }
    return newArray;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result); // Result: [7, -2, 5]

const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array3, array4);
console.log(result2); // Result: ['Beijing']