/*
Завдання 9

Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
і виводить значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyLnk = document.querySelector('body');
const colorWidgetLnk = document.querySelector('.widget');

const colorSpanDisplayLnk = colorWidgetLnk.querySelector('span.color');

const colorChangeButtonLnk = colorWidgetLnk.querySelector('button.change-color');

colorChangeButtonLnk.addEventListener('click', operateWidgetColor);

function operateWidgetColor() { 
  let tmpColor = getRandomHexColor();
  colorSpanDisplayLnk.textContent = tmpColor;
  bodyLnk.style.backgroundColor = tmpColor;
}