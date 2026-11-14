'use strict';

const object1 = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}

const iface = (object) => {
    const key = Object.keys(object);
    const functionArray =[];
    for (let i=0; i<=key.length-1;i++){
        if (typeof object[key[i]]==="function"){
            functionArray.push([key[i], object[key[i]].length]);
        }
    }   
    return functionArray;
}
console.log(iface(object1));