'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// function smoothScroll(){
// window.scrollTo({
//   top: section1.getBoundingClientRect().top + window.pageYOffset,
//   left: section1.getBoundingClientRect().left + window.pageXOffset,
//   behavior: 'smooth'
// });

//   section1.scrollIntoView({behavior:'smooth'})
// }

// function alertH1(){
//   alert('hellllllllllllllloooooooooooo');
// }

// const btnScroll = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1 .section__description')

// console.log(btnScroll.getBoundingClientRect());
// btnScroll.addEventListener('click', smoothScroll)

// const heading = document.querySelector('h1');

// heading.addEventListener('mouseenter', alertH1);

// setTimeout(()=>{
//   heading.removeEventListener('mouseenter', alertH1);
// },3000);

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function randomColor() {
//   return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
//     0,
//     255
//   )})`;
// }

// function clLog(e) {
//   this.style.backgroundColor = randomColor();
// }

// const navMenu = document.querySelector('.nav');
// const navLinks = document.querySelector('.nav__links');
// const body = document.querySelector('body');
// const link = document.querySelector('.nav__link');

// navMenu.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// link.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

const navLinks = document.querySelector('.nav__links');

navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    const targetSection = document.querySelector(id);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});

const tabs = document.querySelector('.operations__tab-container');

tabs.addEventListener('click', function (e) {
  const clickedBtn = e.target.closest('.operations__tab');



    //убирвем у всех табов класс  operations__tab--active
    document
      .querySelectorAll('.operations__tab')
      .forEach((btn) => btn.classList.remove('operations__tab--active'));

    //активируем кликнутый таб
    clickedBtn.classList.add('operations__tab--active');
    const tabId = clickedBtn.getAttribute('data-tab');

    //удаляю .operations__content--active с елемента
    const activeContent = document.querySelector(
      '.operations__content--active'
    );

    if (activeContent) {
      activeContent.classList.remove('operations__content--active');
    }

    //добавляю .operations__content--active который кликнутый
    const requiredContent = document.querySelector(`.operations__content--${tabId}`);
    if(requiredContent){
      requiredContent.classList.add('operations__content--active')
    }

});
