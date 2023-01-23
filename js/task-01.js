/*
Напиши скрипт, який:

    Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
    Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку 
    елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

console.log('dir');
console.dir(document);

const navEl = document.querySelector('li');
console.log('navEl', navEl);
const navEl2 = document.querySelectorAll('li');
console.log('navEl2', navEl2);

const navEl3 = navEl.querySelectorAll('li');
console.log('navEl3', navEl3);
console.log('');
//const itemSelect = navEl3.item;

console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);


  
/*
console.log('');

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem); */