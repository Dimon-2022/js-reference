"use strict";

const products = [
    {
        imgSrc: 'tv-1.png',
        sale: 33,
        price: 17999,
        type: 'Новика',
        model: 'Телевизор Samsung yh223-22 32 черный'
    },
    {
        imgSrc: 'tv-2.png',
        sale: 17,
        price: 20000,
        type: 'Новика',
        model: 'Телевизор Sony yh223-22 32 черный'
    },
    {
        imgSrc: 'tv-3.png',
        sale: 12,
        price: 37999,
        type: 'Новика',
        model: 'Телевизор Sharp yh223-22 32 черный'
    },
    {
        imgSrc: 'tv-4.png',
        sale: 35,
        price: 47999,
        type: 'Новика',
        model: 'Телевизор LG yh223-22 32 черный'
    },
    {
        imgSrc: 'tv-5.png',
        sale: 5,
        price: 57999,
        type: 'Новика',
        model: 'Телевизор Xiaomi yh223-22 32 черный'
    },
    {
        imgSrc: 'tv-6.png',
        sale: 10,
        price: 67999,
        type: 'Новика',
        model: 'Телевизор Apple yh223-22 32 черный'
    }
];

//создаем класс карточка товара +++++++++

//Заполнить конструктор параметрами  ++++

//Создать метод render для отрисовки карточки ++++

//по клику на кнопку добавить новую карточку в конец контейнера


class Product{
    constructor({imgSrc, sale, price, type, model}){
        this.imgSrc = imgSrc;
        this.sale = sale;
        this.price = price;
        this.type = type;
        this.model = model;
    }
    
    //получает цену со скидкой
    getRealPrice(){
        return Math.ceil(this.price * (100-this.sale) / 100);
    }

    //отрисовывает карточка товара
    render(){
        return `<div class="card">
          <img class="card__img" src="img/${this.imgSrc}" alt="tv" />
          <div class="card__sale">-${this.sale}%</div>
          <div class="card__price">
            ${this.getRealPrice()}$<span class="card__old-Price"> <s>${this.price}$</s> </span>
          </div>
          <div class="card__type">${this.type}</div>
          <div class="card__descr">${this.model}</div>
        </div>`;
    }
}

// получаю кнопку
const btn = document.querySelector('.btn');
//получаю контейнер для карточек
const cards = document.querySelector('.cards');




//создаю функцию которая добавляет новую карточку товара в конец контейнера
function addNewCard(){
    const cardQty = document.querySelectorAll('.card').length;

    const totalQty = products.length;

    if(cardQty-1 === totalQty){
        return;
    }
  
    let product = products[cardQty-1];

    const card = new Product(product);


    cards.insertAdjacentHTML('beforeend', card.render());
}

btn.addEventListener('click', addNewCard);