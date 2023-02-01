/*
Завдання 4

Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

    Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
    Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
    Оновлюй інтерфейс новим значенням змінної counterValue.
*/

const idLnk = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener('click', decreaseValue);
buttonIncrement.addEventListener('click', increaseValue);

//let operatValue = -(-(idLnk.textContent));
let operatValue = Number(idLnk.textContent);

function decreaseValue() { 
    operatValue -= 1;
    idLnk.textContent = operatValue;
}
function increaseValue() {
    operatValue += 1;
    idLnk.textContent = operatValue;
}

console.log(operatValue);