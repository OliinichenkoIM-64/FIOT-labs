'use strict';
//ЗАВДАННЯ 7
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages=(Arrays)=>{
    let Answer={};
    for (const key in Arrays){
        Answer[key] = Arrays[key].died-Arrays[key].born;
    }
    return Answer;
}

console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }