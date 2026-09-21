'use strict';
// приклад виклику: const a = 5; const b = inc(a); console.dir({a, b});
const inc = (arg) => {
    return arg + 1;
};

const a = 5;
const b = inc(a);

console.dir({a:a, b: b});


// приклад виклику const obj = { n: 5 }; inc(obj); console.dir(obj);
const inc_obj = (obj) => {
    obj.n = obj.n+1;
};

const num = {n:5};
inc_obj(num);

console.dir(num);