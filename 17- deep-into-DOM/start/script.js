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
  const activeContent = document.querySelector('.operations__content--active');

  if (activeContent) {
    activeContent.classList.remove('operations__content--active');
  }

  //добавляю .operations__content--active который кликнутый
  const requiredContent = document.querySelector(
    `.operations__content--${tabId}`
  );
  if (requiredContent) {
    requiredContent.classList.add('operations__content--active');
  }
});

const nav = document.querySelector('.nav');
const elements = document.querySelectorAll('.nav__link, .nav__logo');

nav.addEventListener('mouseover', function (e) {
  if (
    !e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('nav__logo')
  )
    return;

  elements.forEach((el) => el.classList.add('has-transparent'));
  e.target.classList.remove('has-transparent');
});

function restoreOpacity() {
  elements.forEach((el) => el.classList.remove('has-transparent'));
}

nav.addEventListener('mouseout', restoreOpacity);

// function callBack(entries) {
//   if (!entries[0].isIntersecting) {

//   nav.classList.add('sticky')
//   }
//   else{
//     nav.classList.remove('sticky');
//   }
// }

// const options = {
//   threshold: 0,
// };
// //создаем наблюдатель
// const observer = new IntersectionObserver(callBack, options);

// observer.observe(document.querySelector('.header'));

/*


const allSections = document.querySelectorAll('.section');

//функция показа секции
function revealSection(entries, observer){
  if(entries[0].isIntersecting){
    entries[0].target.classList.remove('section--hidden');
    observer.unobserve();
  }
  
  //console.log(entries);
}

//создаем наблюдателя
const sectionsObserver = new IntersectionObserver(revealSection, {threshold: 0.15});

//делаем все секции невидимыми и наблюдаемыми
allSections.forEach(section=>{
  section.classList.add('section--hidden');
  sectionsObserver.observe(section);
});

//получаю картинки
const allLazyImages = document.querySelectorAll('.lazy-img');
//cоздаю функцию 
function unblurLazyImg(entries){
  if(entries[0].isIntersecting){
    const img = entries[0].target;
    img.src = img.dataset.src;

    img.addEventListener('load', function(){
      console.log(this);
      this.classList.remove('lazy-img');
    });
    
  }
}
//создаю наблюдателя
const lazyImgObserver = new IntersectionObserver(unblurLazyImg, {threshold: 1});
// делаю lazy img наблюдаемыми
allLazyImages.forEach(img=>lazyImgObserver.observe(img));
*/

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let currentSlide = 0;
const maxSlides = slides.length;

const btnRight = document.querySelector('.slider__btn--right'); 
const btnLeft = document.querySelector('.slider__btn--left');
const dots = document.querySelector('.dots');

function createDots(){
  dots.innerHTML = '';

  
  slides.forEach((slide, i)=>{

     let activeDot = (i === currentSlide) ? 'dots__dot--active' : '';

     console.log(currentSlide, i);
    const dot = `<span class="dots__dot ${activeDot}" data-slide=${i}></span>`;
    dots.insertAdjacentHTML('beforeend', dot);
  });
}

function goToSlide(currentSlide){
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
}

createDots();
goToSlide(0);

function nextSlide(){
  if(currentSlide === maxSlides-1){
    currentSlide = 0;
  }
  else{
    currentSlide++;
  }
  goToSlide(currentSlide);
  createDots();
}

function prevSlide(){
  if(currentSlide === 0){
    currentSlide = maxSlides - 1;
  }
  else{
    currentSlide--;
  }
 
  goToSlide(currentSlide);
  createDots();
}

function changeSlide(e){
  const slide = Number(e.target.dataset.slide);
  currentSlide = slide;
  goToSlide(slide);
  createDots();
}


btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
dots.addEventListener('click', changeSlide);

document.addEventListener('keydown', function(e){
  console.log(e);
  if(e.keyCode === 39){
    nextSlide()
  }
  else if(e.keyCode === 37){
    prevSlide()
  }
})