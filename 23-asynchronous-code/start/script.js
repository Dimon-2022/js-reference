'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const input = document.querySelector('.required-country');

///////////////////////////////////////

//fetch

function renderError(message) {
  countriesContainer.insertAdjacentText('beforeend', message);
}

function getCountryData(country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function (err) {
      renderError(`Что-то пошло не так из-за ${err}`);
    });
  console.log(request);
}

btn.addEventListener('click', function () {
  getCountryData('ukraine');
});

// btn.addEventListener('click', function () {
//   console.log(input.value);

//   if (input.value) {
//     const request = new XMLHttpRequest();
//     request.open(
//       'GET',
//       `https://restcountries.com/v3.1/name/${input.value.toLowerCase()}`
//     );
//     request.send();

//     request.addEventListener('load', function () {
//       const data = JSON.parse(request.responseText);

//       const [countryObj] = data;
//       console.log(countryObj);
//       renderCountry(countryObj);
//     });
//   }
// });

function renderCountry(countryObj) {
  const { currencies } = countryObj;

  let curr = [];

  for (let key in currencies) {
    curr.push(currencies[key].name);
  }

  let languages = Object.values(countryObj.languages);

  const html = `<article class="country">
    <img class="country__img" src="${countryObj.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${countryObj.name.official}</h3>
      <h4 class="country__region">${countryObj.region}</h4>
      <p class="country__row"><span>👫</span>${countryObj.population}</p>
      <p class="country__row"><span>🗣️</span>${languages}</p>
      <p class="country__row"><span>💰</span>${curr.join(', ')}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
}

//Получить координаты из браузера

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;

      //С помощью API получить страну по координатам
      let url = `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=448236491882072262074x83126`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const country = data.country.toLowerCase();
          // Подключится к второму API и получить страну
          return fetch(`https://restcountries.com/v3.1/name/${country}`);
        })
        .then((response) => response.json())
        .then((data) => {
          //Вывести карточку страны
          renderCountry(data[0]);
        });
    },
    function () {
      alert('Вы не передали свои геопозицию');
    }
  );
}
