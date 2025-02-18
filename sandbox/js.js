// 'use strict';

// const fruits = ['orange', 'peach', 'plum', 'strawberry', 'tangerine'];

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

// const arr = [
//   'john',
//   'Travolta',
//   2023 - 1992,
//   'New York',
//   true,
//   ['Anna', 'Peter', 'Taras'],
// ];

// for(let i = 0; i< arr.length; i++){

//     if(typeof arr[i]!== 'string'){
//         continue;
//     }

//     console.log(arr[i]);
// }

// let i = 2;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// for(let i = 2; i<=10; i++){
//     console.log(i);
// }

// let lis = document.querySelectorAll('li');
// console.log(lis);

// let arr = Array.from(lis);
// arr.push('Dima');


// for(const val of arr){
//     console.log(val);
// }


// let user = {
//     name: 'Dima',
//     surname:'rvfefd',
//     age: 15
// };

// for(const ttt in user){
//     console.log(user[ttt])
// }

// let header = document.querySelector('.header');
// let content = header.innerHTML;
// header.innerHTML = 'Hello,<span>Dima</span>';



// let h3 = document.createElement('h3');
// h3.textContent = 'd123456';

// let list = document.querySelector('.nav__list');


// let lishka = document.createElement('li');
// lishka.textContent = 'мой пункт меню';

// list.insertAdjacentHTML('beforeend', '<li>ITEM</li>');

// let header = document.querySelector('h1');

// let ourDiv = document.createElement('div');

// header.after(ourDiv);
// ourDiv.textContent = 'Блок Димы';

// ourDiv.classList.add('hello', 'poka', 'dima');

// ourDiv.classList.remove('hello');

// const header = document.querySelector('.header');
// const styleOfHeader = getComputedStyle(header);


// let fs = styleOfHeader.fontSize;
// console.log(fs);
// console.log(styleOfHeader);

// let str1 = '24px';
// let str2 = '10px';

// console.log(parseInt(str1) + parseInt(str2));

// let list = document.querySelectorAll('li');

// for(let item of list){
//     item.classList.add('dima');
// }

// let imgDog = document.querySelector('img');
// console.log(imgDog);
// let src = imgDog.getAttribute('src');
// console.log(src);
// imgDog.setAttribute('src', './images/old-dog.jpeg');
// imgDog.setAttribute('alt', 'Моя взрослая собака');

// console.log(imgDog.hasAttribute('href'));
// imgDog.removeAttribute('src');

const switcher = document.querySelector('#switcher');
const imgDog = document.querySelector('img');




function switchDogs(){
    imgDog.classList.toggle('old-dog');

    let isOldDog = imgDog.classList.contains('old-dog');
    
    if(isOldDog){
        imgDog.setAttribute('src', './images/old-dog.jpeg');
    }else{
        imgDog.setAttribute('src', './images/dog.webp');
    }    
}



switcher.addEventListener('mouseenter', switchDogs);
