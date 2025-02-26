"use strict";

/*
ЗАДАЧИ:

Создайте программу которая будет преобразовывать переменные слова в которых разделены нижним тире, в переменные которые будут записанны в camelCase нотации.
/////////

Подсказки:
1) Решение должно работать с переменными из 2-х слов. Не больше
2)Чтобы получить строку введенных данных из textarea, можно получить значение свойства value, DOM элемента textarea
3) Практика сложная, поэтому если на чем то застряли, посмотрите решение проблемы и пробуйте дальше самостоятельно.
4)Записать результат вы можете в div с классом output, через innerText
5)  По итогу переменные должны выглядеть так: 
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

*/




//создаю функцию преобразования введенных данных
function modifyData(){
    //получаю строку из введенных данных
    const dataStr = document.querySelector('.text').value;
     //получаю output
    const outputBox = document.querySelector('.output');
    // разбиваю строку в массив по переносу строки
    const dataArr = dataStr.split('\n');


    const result = [];

    for(let i = 0; i<dataArr.length;i++){
        let item = dataArr[i].trim().toLocaleLowerCase().split('_');
        item[1] = item[1].slice(0,1).toUpperCase() + item[1].slice(1);
        item = item.join('');
        
        result.push(item);
    }

    const processedData = result.join('\n');

    //выводим данные в блок output
    outputBox.innerText = processedData;
}





//получаю кнопку
const btn = document.querySelector('.btn');

//добовляю слушателя на кнопку
btn.addEventListener('click', modifyData);
