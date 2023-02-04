/*
Завдання 10 (виконувати не обов'язково)

Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість 
елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням 
на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
скільки вказано в amount і додає їх у div#boxes.

    Розміри найпершого <div> - 30px на 30px.
    Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
    Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову 
    функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const controlsLnk = document.querySelector('#controls');
const buttonCreateLnk = controlsLnk.querySelector('button[data-create]');
const buttonDestroyLnk = controlsLnk.querySelector('button[data-destroy]');
const inputLnk = controlsLnk.querySelector('input');

const boxesLnk = document.querySelector('#boxes');

function inputReaderBoxCreator() { 
  let boxesMarkupArr = new Array(Number(inputLnk.value)).fill("");
  
  boxesMarkupArr = boxesMarkupArr.reduce((resultString, el, index) =>
  {
    let tmpVal = 30 + index * 10;
    let randomBackgroundColor = getRandomHexColor();
    let markupString = `<div style="width: ${tmpVal}px; height: ${tmpVal}px; 
    background-color: ${randomBackgroundColor}">
        </div>`;
    console.log(`Number of boxes = ${el.toString()}`);
    return (resultString += markupString);      
    }
    , ``);
  boxesLnk.insertAdjacentHTML("beforeend", boxesMarkupArr);
}
function removeBoxes() { 
  boxesLnk.innerHTML = "";
  inputLnk.value = "";
}

buttonCreateLnk.addEventListener("click", inputReaderBoxCreator);
buttonDestroyLnk.addEventListener("click", removeBoxes);
