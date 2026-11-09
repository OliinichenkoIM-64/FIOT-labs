'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = (length, characters) =>{
    const charactersArray=[...characters];
    const result=[];
    for (let i=1; i<=length; i++){
        result.push(charactersArray[Math.floor(Math.random()*charactersArray.length)]);
    }
    return result.join('');    
}
const key = generateKey(16, characters);
console.log(key);