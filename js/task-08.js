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

//const loginFormLnk = document.querySelector('.login-form');
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

let toData = {};//{email: "", password: ""};
const loginFormLnk = document.querySelector('.login-form');

const  smartSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  toData["email"] = email.value;
  toData["password"] = password.value; 
   
  console.log(`Email: ${email.value}, Password: ${password.value}`);
    console.log(toData);
    //operatorToData(toData.email, toData.password);//лише для виведення на екран
    
  event.currentTarget.reset(toData.email, toData.password);  
} 

loginFormLnk.addEventListener('submit', smartSubmit);
/*
function operatorToData (email, password)
    { 
    toData.email = email;
    toData.password = password;
    console.log('Seen from function: ');
    console.log(toData.email);
    console.log(toData.password);
    console.log();
    console.log(toData);
    console.log();
    return {email, password};
}*/
    

console.log('Out from the listener just this: ', toData); //{email: '', password: ''}