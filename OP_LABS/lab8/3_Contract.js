'use strict';
const contract = (fn, ...types) =>(...args)=>{
    for (let i=0; i<types.length-1; i++){
        if (typeof args.at(i)!==types[i].name.toLowerCase()){
             throw TypeError("Один з аргументів не відповідний за contract");
        }
    }
    const answer = fn(...args);
     if (typeof answer!==(types.at(-1).name.toLowerCase())){
         throw TypeError("Повертаєьтся не той тип");
    }
    return answer;
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5