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

const loginFormLnk = document.querySelector('.login-form');
/*
const mangoUser = {
  mangoEmail: '',
  mangoLogin: '',
  mangoReturnFields() {
    console.log(this.mangoEmail, this.mangoLogin);
    return { mangoEmail, mangoLogin };
  },
  mangoListener(event) {
    const {
      elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
      return alert('Please fill in all the fields!');
    }
      this.mangoEmail = email.value;
      this.mangoLogin = password.value;
        console.log(`Email: ${email.value}, Password: ${password.value}`);
        event.currentTarget.reset();
  },
};

loginFormLnk.addEventListener('submit', mangoUser.mangoListener.bind(mangoUser));

mangoUser.mangoReturnFields.bind(mangoUser);*/



let toData = {};
loginFormLnk.addEventListener('submit', smartSubmit);

function smartSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  toData.Email = email.value;
  toData.Password = password.value;

  console.log(`Email: ${email.value}, Password: ${password.value}`);

  console.log(toData.Email, toData.Password);

  event.currentTarget.reset();

  //return alert({ ...toData }.Email, {...toData}.Password);
} 
