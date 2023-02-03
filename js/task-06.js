/*
Завдання 6

Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної 
кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

    Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
    Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const inputLnk = document.querySelector('#validation-input');
inputLnk.addEventListener('blur', checkOutput);

const dataLength = inputLnk.getAttribute('data-length');
console.log(dataLength);

function checkOutput() { 
    let currentValue = inputLnk.value.trim();
    inputLnk.value = currentValue;
    const operativeValue = [...currentValue].length;    
    if (operativeValue != dataLength) {
        //console.log(operativeValue, inputLnk.value);
        //if (inputLnk.classList.contains("valid")) {}
        inputLnk.classList.remove("valid");
        inputLnk.classList.add("invalid");
    }
    //
    else {
        //if (inputLnk.classList.contains("invalid")) {}
            inputLnk.classList.remove("invalid");
            inputLnk.classList.add("valid");        
    }
}