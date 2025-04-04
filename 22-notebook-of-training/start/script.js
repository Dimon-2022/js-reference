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

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace(){
    this.pace = this.duration / this.distance;
    return this.pace
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
  }

  calcSpeed(){
    this.speed = this.distance / (this.duration / 60);
    return this.speed
  }
}

const run = new Running([-4, -35], 5.2, 24, 170);
const cycl = new Cycling([-4, -35], 5.2, 90, 650);

console.log(run, cycl);

class App {
  _map;
  _mapEvent;

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleField.bind(this));
  }

  //метод запроса даных о местаположении
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Вы не предоставили доступ к своей локации');
        }
      );
    }
  }

  //Метод загрузки карты на страницу
  _loadMap(position) {
    const {
      coords: { latitude, longitude },
    } = position;
    const coords = [latitude, longitude];
    this._map = L.map('map').setView(coords, 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);

    this._map.on('click', this._showForm.bind(this));
  }

  //метод который отобразит форму при клике на карту
  _showForm(e) {
    this._mapEvent = e;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  //метод переключает между темпом и высотой
  _toggleField(e) {
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
  }

  //метод добавляет маркер на карту
  _newWorkout(e) {
    e.preventDefault();
    this._cleanInputs();

    //добавление маркера
    const {
      latlng: { lat, lng },
    } = this._mapEvent;
    const markerCoords = [lat, lng];

    L.marker(markerCoords)
      .addTo(this._map)
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
  }

  //метод очищяет поля формы
  _cleanInputs() {
    inputDuration.value = '';
    inputDistance.value = '';
    inputCadence.value = '';
  }
}

const app = new App();
