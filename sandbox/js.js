'use strict'

const fruits = ['orange', 'peach', 'plum', 'strawberry', 'tangerine'];

//добовляет элемент в конец массива
// fruits.push('pear');
// fruits.push('apricot');

// //добовляет элемент в начало массива
// fruits.unshift('kivi');


// //удаляет элемент в конце массива
// fruits.pop();

// //удаляет элемент в начале массива
// fruits.shift();





// let x = fruits.splice(1, 3);
// console.log(x);


// console.log(fruits.includes('peach'));

// console.log(fruits.indexOf('peach'));

// console.log(fruits);




// for (let i = 1; i <= 10; i++) {

//     let quantity = (i >= 2 && i<= 4) ? 'раза' : 'раз';
        
//     console.log(`Это сообщение появилось в консоли ${i} ${quantity}`);
// }



const arr = [
    'john',
    'Travolta',
    2023 - 1992,
    'New York',
    true,
    ['Anna', 'Peter', 'Taras']
];

for(let i = 0; i< arr.length; i++){
  
    if(typeof arr[i]!== 'string'){
        continue;
    }

    console.log(arr[i]);
}