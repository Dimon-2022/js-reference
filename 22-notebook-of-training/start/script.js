'use strict';

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

  _setDescription() {
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
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  _map;
  _mapEvent;
  _workouts = [];

  constructor() {
    this._getPosition();

    //получение данных из LS
    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleField.bind(this));
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) {
      return;
    }
    this._workouts = data;
    this._workouts.forEach((workout) => {
      this._renderWorkout(workout);
    });
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

    this._workouts.forEach((workout) => {
      this._renderWorkMarker(workout);
    });
  }

  reset(){
    localStorage.removeItem('workouts');
    location.reload();
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

    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

    // получить данные из формы
    const type = inputType.value;
    const duration = +inputDuration.value;
    const distance = +inputDistance.value;
    let workout;
    const { lat, lng } = this._mapEvent.latlng;

    if (type === 'running') {
      const cadence = +inputCadence.value;

      //валидация значений формы
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Необходимо ввести целое положительное число');
      }
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      //валидация значений формы
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert('Необходимо ввести целое положительное число');
      }

      const { lat, lng } = this._mapEvent.latlng;
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this._workouts.push(workout);
    console.log(this._workouts);

    //рендер маркера тренировки на карте
    this._renderWorkMarker(workout);
    this._renderWorkout(workout);
    this._hideForm();
    this._setLocalStorage();
  }

  _renderWorkMarker(workout) {
    L.marker(workout.coords)
      .addTo(this._map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: 'mark-popup',
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _hideForm() {
    form.classList.add('hidden');
    inputDuration.value = '';
    inputDistance.value = '';
    inputCadence.value = '';
  }

  //Рендер списка тренировок под формой
  _renderWorkout(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">км</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">мин</span>
          </div>`;

    if (workout.type === 'running') {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">мин/км</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">шаг</span>
          </div>
        </li>`;
    }

    if (workout.type === 'cycling') {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">км/час</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}</span>
            <span class="workout__unit">м</span>
          </div>
        </li>`;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) {
      return;
    }

    const id = workoutEl.dataset.id;

    const workoutObj = this._workouts.find((workout) => id === workout.id);

    this._map.flyTo(workoutObj.coords, 15, { duration: 2 });
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this._workouts));
  }
}

const app = new App();
