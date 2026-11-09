'use strict';
//ЗАВДАННЯ 6
const max = (array)=> {
    let answer = -Infinity;
    for (let i=0; i<array.length;i++){
        for (let j=0; j<array[i].length;j++){
            if (answer<array[i][j]) {
                answer=array[i][j];
            }
        }
    }
    return answer;
}
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9