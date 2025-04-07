'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open('GET', 'https://meowfacts.herokuapp.com/?lang=ukr-ua');
request.send();
request.addEventListener('load', function(){
    const data = JSON.parse(request.responseText);
    const [text] = data.data;
    console.log(text);
    document.querySelector('.container').textContent = text;
})
