'use strict';


const userArray = [
    {name:"John Pork", phone:"+380445554433"},
    {name:"Jotaro Kujo", phone:"+380564789436"},
    {name:"Yagami Light", phone:"+380123456789"}
];

const findPhoneByName = (string) => {
    for (let i=0; i<userArray.length; i++){
        if (userArray[i].name===string){
            return userArray[i].phone
        }
    }
    return "Name not found.";
}

console.log(findPhoneByName("John Pork"));