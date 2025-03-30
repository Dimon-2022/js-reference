"use strict";
/* 

ЗАДАЧА:
1.Используй функцию конструктор чтобы создать электор автомобиль(ElectroCar), который будет дочерним классом автомобиля. Помимо свойств марки(mark) и скорости(speed), у дочернего класса электро автомобиля, создайте свойство уровня заряда батареи(charge). +++++++++
2.Создайте метод зарядки электро автомобиля, у которого будет параметр (chargeTo) который при вызове этого метода, будет менять уровень заряда в свойствах электро автомобиля.++++
3. Создайте метод ускорения(accelerate) который будет увеличивать скорость на 20км\ч и уменьшать уровень заряда авто на 1%. И выводить сообщение: "Tesla едет со скоростью 120км\ч, с уровнем заряда 22%" +++++++++
4.Создайте экземпляр дочернего класса и поэкспериментируйте с вызовом методов. +++++

ДАННЫЕ из прошлой практики:

const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};

*/


const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};


function ElectroCar(mark, speed, charge){
  Car.call(this, mark, speed);
  this.charge = charge;
} 

//Добовляет методы родителя в дочерний класс
ElectroCar.prototype = Object.create(Car.prototype);


//добовляем новый метод дочернему класу
ElectroCar.prototype.makeCharge = function (chargeTo){
  this.charge = chargeTo; 
}


//переопрделяем метод в дочернем классе
ElectroCar.prototype.accelerate = function(){
  this.speed += 20;
  this.charge--;
  console.log(`${this.mark} едет со скоростью ${this.speed}км\ч, с уровнем заряда ${this.charge}%`);
}


const tesla = new ElectroCar('tesla', 111, 58);
tesla.makeCharge(100);
tesla.accelerate();
tesla.accelerate();
console.log(tesla);





// class Car1{
//   constructor(mark, speed){
//     this.mark = mark;
//     this.speed = speed;
//   }

//   accelerate(){
//     this.speed += 10;
//     console.log(`${this.mark} едет со скоростью ${this.speed} км\ч`);
//   }

//   break(){
//     this.speed -= 5;
//     console.log(`${this.mark} едет со скоростью ${this.speed} км\ч`);
//   }
// }

// class ElectroCar1 extends Car1{
//   constructor(mark, speed, charge){
//     super(mark, speed);
//     this.charge = charge;
//   }
  
//   makeCharge(chargeTo){
//     this.charge = chargeTo; 
//   }

//   accelerate(){
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.mark} едет со скоростью ${this.speed}км\ч, с уровнем заряда ${this.charge}%`);
//   }

// }

// const ford = new Car1('ford', 50);
// console.log(ford);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();

// const byd = new ElectroCar1('byd', 75, 62);
// console.log(byd);
// byd.accelerate();
// byd.accelerate();
// byd.accelerate();
// byd.makeCharge(100);
// console.log(byd);