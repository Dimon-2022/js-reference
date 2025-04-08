'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const input = document.querySelector('.required-country');

///////////////////////////////////////
btn.addEventListener('click', function () {
  console.log(input.value);

  if (input.value) {
    const request = new XMLHttpRequest();
    request.open(
      'GET',
      `https://restcountries.com/v3.1/name/${input.value.toLowerCase()}`
    );
    request.send();

    request.addEventListener('load', function () {
      const data = JSON.parse(request.responseText);

      const [countryObj] = data;
      console.log(countryObj);
      renderCountry(countryObj);
    });
  }
});

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
