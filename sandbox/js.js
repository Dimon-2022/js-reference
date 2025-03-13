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

// const switcher = document.querySelector('#switcher');
// const imgDog = document.querySelector('img');

// function switchDogs(){
//     imgDog.classList.toggle('old-dog');

//     let isOldDog = imgDog.classList.contains('old-dog');

//     if(isOldDog){
//         imgDog.setAttribute('src', './images/old-dog.jpeg');
//     }else{
//         imgDog.setAttribute('src', './images/dog.webp');
//     }
// }

// switcher.addEventListener('mouseenter', switchDogs);

// const switcher = document.querySelector('#switcher');
// switcher.addEventListener('click', ()=>{
//     console.log(this);
// })

// const family = ['father', 'mother', 'sister', 'brother'];
// const [, ,sibling1, sibling2] = family;
// console.log(sibling1, sibling2);

// const fruits = [
//     'apple',
//     'orange',
//     'plum'
// ];

// const vegetables = ['tomato', 'potato'];

// const myFruits = [...vegetables, 'cucumber', ...fruits];
// console.log(myFruits);

// const [fruit1, ...others] = fruits;
// console.log(others);

// const [a, b, c, ...others] = [1, 2, 3,4,5,6,7];
// console.log(a, b, c, others);

// const arr1 = new Array('Dima', 'Vadya');
// console.log(arr1);

// const user = {};
// user.name = 'Dima';
// console.log(user);

// const user1 = new Object({name:'Vadya'});
// console.log(user1);

// const date = new Date(2025, 7, 14);
// console.log(date);

// class Laptop{
//     constructor(model, power){
//         this.model = model;
//         this.power = power;
//     }

//     output(){
//         console.log('Я умею печатать');
//     }

// }

// const asus = new Laptop('Asus', 100);

// asus.output();

// console.log(asus);

// class Car{
//     constructor(model, speed){
//         this.model = model;
//         this.speed = speed;
//     }

//     drive(){
//         console.log(`${this.model} едет со скоростью ${this.speed}`);
//     }

//     bibi(gudok){
//         console.log(`${gudok}`);
//     }

// }

// const myCar = new Car('Mercedes', 150);
// const secondCar = new Car('Bmw', 170);

// secondCar.drive();
// myCar.drive();
// myCar.bibi('fafa');

//console.log(myCar, secondCar);

// const fruits = new Array(
//     'kiwi',
//     'apple',
//     'banana',
//     'apple',
//     'apple',
//     'apple'
// );

// const uniqueFruits = new Set(fruits);

// const hotel = new Map();
// console.log(hotel);
// let str = 'Hello world';
// console.log(str.split(' ').join(' '));
// str = str.trim();
// const indexLastProbel = str.lastIndexOf(' ')+1;//12
// console.log(str.slice(12));
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

// const grnPrice = '100 grn';
// const dollarPrice = grnPrice.replace('grn', '$');

// console.log(dollarPrice);

// function makeCapitalize(name){
//     //вырезает первую букву
//     let firstLetter = name.slice(0, 1);//v
//     //делает первую букву большой
//     firstLetter = firstLetter.toLocaleUpperCase();//V
//     ///вырезает все кроме первой буквы
//     const others = name.slice(1);//asya
//     //возвращяет имя с большой буквы
//     const result = firstLetter + others;

//     return result;
// }

// const names = 'dima-petja-katja-vadja'

// const arrNames = names.split('-');

// let result = [];

// for(let i = 0; i < arrNames.length; i++){
//     const eachName = arrNames[i];
//     const capitalizedName = makeCapitalize(eachName);
//     result.push(capitalizedName);
// }

// result = result.join('-');

// console.log(result);

// const flight = '432FRE';
// const passenger = {
//     name:'Dima',
//     passport:123456789
// };

// function checkIn(flightNum, passId){
//     flightNum = '111RRR';
//     passId.name = 'Mr ' + passId.name;
// }

// checkIn(flight,passenger);
// console.log(flight);
// console.log(passenger.name);

// let user1 = {
//     name:'Dima'
// };

// let user2 = user1;
// let user3 = user2;
// user3.name = 'Petya';
// console.log(user1.name, user2.name, user3.name);

// const printA = function(){
//     console.log('A');
// };

// function printAll(myFunc){
//     myFunc();
//     console.log('B');
// }

// printAll(printA);

// function oneWord(str){
//     return str.toLocaleLowerCase().replaceAll(' ', '');
// }

// function upperFirstLetter(str){
//     const firstLetter = str[0].toUpperCase();
//     const others = str.slice(1);

//     return firstLetter + others;
// }

//функция высшего порядка
// function transformer(str, fn){
//     console.log(`Это оригинальная строка ${str}`);
//     console.log(`Это измененная строка ${fn(str)}`);
// }
//transformer('pasha');
// transformer('pasha', upperFirstLetter);

// const user1 = {
//     name:'Dima',
//     age:15,
//     printInfo: function(){
//         console.log(`user ${this.name}-${this.age} years old`);
//     }
// };

// user1.printInfo();

// const user2 = {
//     name:'Masha',
//     age:15
// };

// user1.printInfo.call(user2);

// const myFavoriteFruits = fruits.slice(-2);
//console.log(myFavoriteFruits);

// const fruitsCopy = [...fruits];
//console.log(fruitsCopy);

// fruits.reverse();

// console.log(fruits);

// const parents = ['father', 'mother'];
// const children = ['dima', 'vadja'];
// const grandparents = ['grandma', 'grandpa']

// const family = parents.concat(children, grandparents);

// const family1 = [...parents, ...children, ...grandparents];
// console.log(family1);

// const fruits = ['plum', 'apple', 'orange', 'peach', 'strawberry', 'raspberry', 'watermelon'];

// for(let i = 0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// for(const item of fruits){
//     console.log(item);
// }

// fruits.forEach(function(item){
//     console.log(item);
// });

// const numbers = [99, -20, -100, 99, 66, 33, 99, 58];
// const filteredNumbers = numbers.filter(item => item<0);
// console.log(filteredNumbers);

// const numbers = [99, -20, -100, 99, 66, 33, 99, 58];
// let res = 0;

// for(let val of numbers){
//     res += val;
// }

// console.log(res);

// const arr = [5, 5, 5, 5];

// const sum = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(sum);


//  const arrNumbers = [1,2,-1,-2,3];
// const res = arrNumbers.filter(num=>num<0);
// console.log(res);

// const arr = [1, 2, 3, 4, 5];
// arr.fill(7);
// console.log(arr);

// const text = 'Dima';
// const arr = Array.from(text);
// arr.push(10);
// console.log(arr);

const date = new Date();
console.dir(date.getFullYear());