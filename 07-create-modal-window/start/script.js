"use strict";

///////////////////////
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/

//получаю все кнопки
const btns = document.querySelectorAll('.show-modal');

//Получаю модальное окно
const modalWindow = document.querySelector('.modal');

//получаю overlay
const overlay = document.querySelector('.overlay');

//получаю иконку закрытия модального окна
const closeBtn = document.querySelector('.close-modal');

function openModalWindow(){
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModalWindow(){
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let btn of btns){
    btn.addEventListener('click', openModalWindow);
}

for(const element of [closeBtn,overlay]){
    element.addEventListener('click', closeModalWindow);
}