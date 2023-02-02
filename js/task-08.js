/*
Завдання 8

Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

    Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
    Під час відправлення форми сторінка не повинна перезавантажуватися.
    Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
    Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде 
    ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй 
    властивість elements.
    Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/
/*
 const {
    elements: { username, password }
  } = event.currentTarget;
*/
/*
<form class="register-form" autocomplete="off">
  <input type="text" name="username" placeholder="Username" />
  <input type="password" name="password" placeholder="Password" />
  <button type="submit">Register</button>
</form>
*/
/*
body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.register-form input {
  margin-bottom: 16px;
  padding: 8px 12px;
}

.register-form button {
  padding: 12px;
}


*/
/*
const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password }
  } = event.currentTarget;
  console.log(username.value, password.value);
});
*/

const loginFormLnk = document.querySelector('.login-form');
console.log(loginFormLnk);
//console.log(loginFormLnk.name);
//console.log(loginFormLnk.querySelectorAll('input'));

const inputFieldsLnk = loginFormLnk.querySelectorAll('input');
const submitButtonLnk = loginFormLnk.querySelector('button');

inputFieldsLnk[0].addEventListener('blur', ifNameFinished);

function ifNameFinished() { 

}

inputFieldsLnk[1].addEventListener('blur', ifPassFinished);

function ifPassFinished() { 

}

/*


const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

/*


<form class="form" autocomplete="off">
  <input type="text" name="login" placeholder="Login">
  <input type="password" name="password" placeholder="Password">
  <button class="btn" type="submit">Register</button>
</form>


/
*/