'use strict';
const pipe = (...func) =>{
    const followers=[];

    const f = (value) =>{
        try{
            return func.reduceRight((answer,cfunc)=>cfunc(answer),value)
        } catch (err) {
            followers.forEach(callback => callback(err));
            return undefined;
        }
    };

    f.on = (event, callback) => {
        if (event === 'error') {
            followers.push(callback);
        }
        return f;
    };

    return f;
}


const func1 = x => ++x;
const func2 = x => x * 2;
const f = pipe(func1, func2, 5);
f.on('error', err => console.log(err));
console.log(f(5)); // undefined

const f2 = pipe(func1, func2);
f2.on('error', err => console.log(err));
console.log(f2(5)); // 11