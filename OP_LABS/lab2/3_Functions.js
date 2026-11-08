'use strict';
const average = (a, b) => {
    return (a+b)/2;
} 
const square = (x) => {
    return (x*x);
}
const cube = (x) => {
    return (x*x*x);
}

const calculate = () => {
    const ArrayCalculate = [];
    for (let i=0; i<=9 ; i++){
        let x=average(square(i), cube(i));
        ArrayCalculate.push(x);
    }
    return ArrayCalculate;
}

console.log(calculate())
