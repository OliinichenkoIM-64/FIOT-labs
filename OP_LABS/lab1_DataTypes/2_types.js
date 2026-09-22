'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word', Infinity, NaN];
const collector = {number:0,string:0,boolean:0};

for (const element of array) {
    const elementType = typeof element;
    collector[elementType]+=1;
};

console.log(collector);



// const collector = {};

// for (const element of array) {
//     const elementType = typeof element;
//     if (!collector[elementType]) {
//         collector[elementType]=1;
//     }
//     else {
//         collector[elementType]+=1;
//     }
//     };

// console.log(collector);

