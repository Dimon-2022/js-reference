'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map;
let mapEvent;

//очищяем input
function cleanInputs() {
  inputDuration.value = '';
  inputDistance.value = '';
  inputCadence.value = '';
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const {
        coords: { latitude, longitude },
      } = position;
      const coords = [latitude, longitude];

      map = L.map('map').setView(coords, 15);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (e) {
        mapEvent = e;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      alert('Вы не предоставили доступ к своей локации');
    }
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  cleanInputs();

  //добавление маркера
  const {
    latlng: { lat, lng },
  } = mapEvent;
  const markerCoords = [lat, lng];

  L.marker(markerCoords)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        autoClose: false,
        closeOnClick: false,
        className: 'mark-popup',
      })
    )
    .setPopupContent('Тренировка')
    .openPopup();
});

inputType.addEventListener('change', function (e) {
  let type = e.target.value; // cycling/running
  let formRowCadence = inputCadence.closest('.form__row');
  let formRowElevation = inputElevation.closest('.form__row');

  if (type === 'cycling') {
    formRowCadence.classList.add('form__row--hidden');
    formRowElevation.classList.remove('form__row--hidden');
  } else if (type === 'running') {
    formRowCadence.classList.remove('form__row--hidden');
    formRowElevation.classList.add('form__row--hidden');
  }
});
