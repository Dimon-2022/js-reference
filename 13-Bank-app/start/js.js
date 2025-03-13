'use strict';

const account1 = {
  owner: 'Dima Fokeev',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
};

const account2 = {
  owner: 'Anna Filimonova',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,
};

const account3 = {
  owner: 'Polina Filimonova',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,
};

const account4 = {
  owner: 'Stanislav Ivanchenko',
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const arrow = document.querySelector('#arrow');

let loggedAcc;
let sortBy = false;

function displayMovements(movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (value, index) {
    const type = value > 0 ? 'зачисление' : 'снятие';
    const modificator = value > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${modificator}">
            ${++index} ${type}
          </div>
          <div class="movements__date">24/01/2037</div>
          <div class="movements__value">${value}₽</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    calcPrintBalance(movements);
    calcPrintIncome(movements);
    calcPrintOutcome(movements);
    calcPrintTotal(movements);
  });
}

function createLogIn(accs) {
  accs.forEach(function (acc) {
    const names = acc.owner.split(' ');
    const firstLetters = names.map((val) =>
      val.slice(0, 1).toLocaleLowerCase()
    );
    acc.logIn = firstLetters.join('');
  });
}

createLogIn(accounts);

function calcPrintBalance(movements) {
  let currentBalance = movements.reduce((acc, val) => {
    return acc + val;
  }, 0);

  labelBalance.textContent = currentBalance + '₽';
}

function calcPrintIncome(movements) {
  const income = movements
    .filter((val) => val > 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumIn.textContent = income + '₽';
}

function calcPrintOutcome(movements) {
  const outcome = movements
    .filter((val) => val < 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = Math.abs(outcome) + '₽';
}

function calcPrintTotal(movements) {
  const total = movements.reduce((acc, val) => acc + val, 0);
  labelSumInterest.textContent = total + '₽';
}

function authenticate(e) {
  e.preventDefault();
  const userName = inputLoginUsername.value;
  const logInPin = inputLoginPin.value;
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  const requiredAcc = accounts.find(
    (val) => val.logIn === userName && val.pin === parseInt(logInPin)
  );

  if (requiredAcc.owner) {
    loggedAcc = requiredAcc;
    containerApp.style.opacity = 1;
    displayMovements(requiredAcc.movements);
  }
}

function sendMoney(e) {
  e.preventDefault();
  const loginTo = inputTransferTo.value;
  const sendSum = inputTransferAmount.value;
  const requiredAcc = accounts.find((val) => val.logIn === loginTo);

  if (requiredAcc.owner) {
    loggedAcc.movements.push(parseInt(sendSum) * -1);
    requiredAcc.movements.push(parseInt(sendSum));
    displayMovements(loggedAcc.movements);
    inputTransferTo.value = '';
    inputTransferAmount.value = '';
  }
}

function deleteAcc(e) {
  e.preventDefault();
  const login = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  const accIndexToDelete = accounts.findIndex(
    (val) => val.logIn === login && val.pin === pin
  );

  if (accIndexToDelete >= 0) {
    accounts.splice(accIndexToDelete, 1);
    inputCloseUsername.value = '';
    inputClosePin.value = '';
    containerApp.style.opacity = 0;
  }
}

function putMoney(e) {
  e.preventDefault();
  const deposit = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';

  if (deposit > 0) {
    loggedAcc.movements.push(deposit);
    displayMovements(loggedAcc.movements);
  }
}

function getTotalBankBalance() {
  return accounts
    .map((val) => val.movements)
    .flat()
    .reduce((acc, val) => acc + val, 0);
}

function sortMoney() {
  sortBy = !sortBy;

  arrow.classList.toggle('rotate');

  if (sortBy) {
    loggedAcc.movements.sort((a, b) => a - b);
  } else {
    loggedAcc.movements.sort((a, b) => b - a);
  }

  displayMovements(loggedAcc.movements);
}

// function getAllMovements(){
//   const movements = document.querySelectorAll('.movements__value');
//   const arr = Array.from(movements).map(val=>val.textContent.replace('₽', ''));
  
//   console.log(arr);
// }

btnLogin.addEventListener('click', authenticate);
btnTransfer.addEventListener('click', sendMoney);
btnClose.addEventListener('click', deleteAcc);
btnLoan.addEventListener('click', putMoney);
btnSort.addEventListener('click', sortMoney);
// labelBalance.addEventListener('click', getAllMovements);
