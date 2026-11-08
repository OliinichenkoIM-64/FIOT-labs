'use strict';

const userObject ={
    "John Pork":"+380445554433",
    "Jotaro Kujo":"+380564789436",
    "Yagami Light":"+380123456789"
}

const findPhoneByName = (string) => {
   return userObject[string];
}

console.log(findPhoneByName('John Pork'));