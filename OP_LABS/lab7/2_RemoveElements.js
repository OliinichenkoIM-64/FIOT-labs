'use strict';

const removeElements = (array, ...items) =>{
    for (const item of items){
        const index = array.indexOf(item);
        if (index!==-1){
            array.splice(index, 1);
        }
    }
} 

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5,"wrong",4);
console.log(array); // Result: [1, 2, 3, 6, 7]