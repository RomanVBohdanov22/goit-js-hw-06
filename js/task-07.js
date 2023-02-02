/*
Завдання 7

Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і 
змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, 
буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const fontSizeControlLnk = document.querySelector("#font-size-control");
const textSpanLnk = document.querySelector("#text");

fontSizeControlLnk.addEventListener('input', changeSize);

const defaultVal = fontSizeControlLnk.value;
console.log(defaultVal);
console.log('');

function changeSize()
{
    let readValue = fontSizeControlLnk.value;
    console.log(readValue);
    textSpanLnk.style.fontSize = `${readValue}px`;
}