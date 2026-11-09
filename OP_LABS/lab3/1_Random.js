'use strict';

const random = (min,max) => {
    if (max===undefined){
        return Math.floor(Math.random()*min);
    }
    else {
        return (Math.floor(Math.random()*(max-min)))+min;
    }
}
console.log(random(5,10));
console.log(random(20));
console.log(random(10,10));