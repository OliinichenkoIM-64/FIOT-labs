'use strict';

const pipe = (...funcs) => (value) =>
  funcs.reduce((answer, fn) => {
    if (typeof fn !== "function") {
      return Error("Один із елементів не функція")}
  return fn(answer);
  }, value);

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const x = f(5);

console.log(x); // 1728