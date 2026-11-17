'use strict';

const unique = (array) => array.filter((item, index) => array.indexOf(item) === index);


const result = unique([2, 1, 1, 3, 2]);
console.log(result); // Result: [2, 1, 3]