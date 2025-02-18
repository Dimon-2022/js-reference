"use strict";

//кол-во попыток
const attempts = 20;

//кнопка-проверка!!!
const checkBtn = document.querySelector(".check");

//поле ввода числа
const guessInput = document.querySelector(".guess");

//получить body
const body = document.querySelector("body");

//получить секретное число
const questionNumber = document.querySelector(".number");

//получить сообщение
const message = document.querySelector(".message");

//ярлык кол-во попыток
const labelAttempts = document.querySelector(".score");
labelAttempts.textContent = attempts;

//ярлык рекорд
const labelRecord = document.querySelector(".highscore");

//получаю кнопку снова
const btnAgain = document.querySelector(".again");

//Устанавливает секретное число от 1 до 20
function getSecretNumber() {
  const secretNumber = Math.random() * 20;
  return Math.floor(secretNumber);
}

//уменьшает на один количество попыток
function decreaseAttempts() {
  let currentAttempts = parseInt(labelAttempts.textContent);
  currentAttempts--;
  labelAttempts.textContent = currentAttempts;
}

//получаю текущще количество попыток
function getCurrentAttempts() {
  return parseInt(labelAttempts.textContent);
}

//Проверяем числа секретное и введеное
function checkNumbers() {
  decreaseAttempts();

  //const secretNumber = 7;

  const inputNumber = parseInt(guessInput.value);

  console.log(secretNumber, inputNumber);

  if (secretNumber === inputNumber) {
    body.classList.add("matched");
    questionNumber.textContent = secretNumber;
    message.textContent = "Вы выиграли!";
    labelRecord.textContent = getCurrentAttempts();
  } else if (inputNumber > secretNumber) {
    message.textContent = "Слишком много!";
  } else if (inputNumber < secretNumber) {
    message.textContent = "Слишком мало!";
  }
}

function setRecord() {
  const currentAttempts = parseInt(labelAttempts.textContent);
  const previousRecord = parseInt(labelRecord.textContent);

  if (currentAttempts > previousRecord) {
    labelRecord.textContent = currentAttempts;
  }
}

//Создаю функцию которая при нажатии будет снова запускать програму
function playAgain() {
  //обновить значение рекорд
  setRecord();
  //убираем зеленый фон
  body.classList.remove("matched");
  //Востанавливаем количество попыток
  labelAttempts.textContent = attempts;
  //устанавливаю фразу "Начните угадывать..."
  message.textContent = "Начните угадывать...";
  //Устанавливаю знак вопроса на начало игры
  questionNumber.textContent = "?";
  //Очищяем число в input
  guessInput.value = "";
  //Устанавливаем новое секретное число
  secretNumber = getSecretNumber();
}

let secretNumber = getSecretNumber();

checkBtn.addEventListener("click", checkNumbers);

//Вешаю слушателя на кнопку снова
btnAgain.addEventListener("click", playAgain);
