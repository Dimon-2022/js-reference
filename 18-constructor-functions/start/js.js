"use strict";
/* 
ЗАДАЧА:
1.Создайте функцию конструктор которая будет представлять автомобиль. В функции конструктор создайте 2 свойства для автомобиля - марка и скорость в км\ч !!!!!!!
2.Создайте метод ускорения который будет увеличивать скорость автомобиля на 10 км\ч и выводить новую, общую скорость в консоль.!!!!!!!!
3.Создайте метод торможения, который будет уменьшать скорость автомобиля на 5 км\ч и выводить общую скорость в консоль. ++++++++++
4.Создайте 2 объекта автомобиля из функции конструктора и используйте методы, который вы создали в функции конструкторе.

ДАННЫЕ:
Авто№1 - "Lada", скорость 170км\ч
Авто№2 - "Skoda", скорость 105км\ч

*/


// function Car(model, speed){
//     this.model = model;
//     this.speed = speed;
// }

// Car.prototype.increaseSpeed = function(){
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.brakeSpeed = function(){
//     this.speed -= 5;
//     console.log(this.speed);
// }

// const tesla = new Car('Tesla', 111);
// const mercedes = new Car('Mercedes', 125)
// console.log(mercedes.brakeSpeed());
// console.log(tesla.increaseSpeed());


class Car{
    constructor(model, speed){
        this.model = model;
        this.speed = speed;
    }
    
    increaseSpeed(){
        this.speed += 10;
        console.log(this.speed);        
    }
    
    brakeSpeed(){
        this.speed -= 5;
        console.log(this.speed);
    }
}

const bmw = new Car('BMW', 111);
const tesla = new Car('Tesla', 150);



