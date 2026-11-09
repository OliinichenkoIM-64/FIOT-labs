'use strict';
//ЗАВДАННЯ 7
const fn = () =>{
const obj1 = {
    name:"Minecraft"
}
obj1.name="Terraria";

let obj2 = {
    name:"Pepsi"
}
obj2.name="CocaCola";

obj2=obj1;

//obj1=obj2; спричине помилку бо неможно змінити посилання obj1 на посилання іншого об'єкта через те що він константа
}

fn();
//ЗАВДАННЯ 8

const createUser = (userName , city)=>{
    const user = {
        name:userName,
        city:city
    }
    return user
}


console.log(createUser("Kris", "Hometown"))