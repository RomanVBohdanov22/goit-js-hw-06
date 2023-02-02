/*
Завдання 5

Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен 
відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

/*
    <input type="text" id="name-input" placeholder="Please enter your name" />
    <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const nameInputLnk = document.querySelector('#name-input');
const nameOutputLnk = document.querySelector('#name-output');
const valueDefault = 'Anonymous';

nameInputLnk.addEventListener('input', changeOutput);

function changeOutput() { 
    
    if (nameInputLnk.value === '') {
        nameOutputLnk.textContent = valueDefault;
        return;
    };
    nameOutputLnk.textContent = nameInputLnk.value.trim();
}