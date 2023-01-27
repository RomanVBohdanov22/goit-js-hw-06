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

const navEl = document.querySelector('ul#categories');
//console.log('navEl', navEl);
const navElCat = navEl.querySelectorAll('li.item');
//console.log('navElCat', navElCat);
console.log('Number of categories: ', navElCat.length);
console.log('');

for (const itemEl of navElCat)
{
    console.log('Category: ', itemEl.querySelector('h2').textContent);
    console.log('Elements: ', itemEl.querySelectorAll('li').length);
    console.log('');
}    

//const navEl3 = navEl.querySelectorAll('li');
//console.log('navEl3', navEl3);
//console.log('');

//console.log('dir');
//console.dir(document);
//const itemSelect = navEl3.item;
/*
console.log('conspect nodes1');
console.log('console.log(document)');
console.log(document);
console.log('');

console.log('const body = document.body');
const body = document.body;
console.log(body);
console.log('');

console.log('const list = body.firstElementChild;');
const list = body.firstElementChild;
console.log(list);
console.log('');

console.log('const firstListItem = list.firstElementChild');
const firstListItem = list.firstElementChild;
console.log(firstListItem);
console.log('');

console.log('const listItems = list.children');
const listItems = list.children;
console.log(listItems);
console.log('');*/



/*

const minuteToClock = function (minutes) {

    let minutES = (minutes % 60).toString().padStart(2, 0);
    let hours = ((minutes - minutES)/60).toString().padStart(2, 0);
    let timeString = `hours:minutes :: ${hours}:${minutES}`;

    return timeString;
 }

console.log(minuteToClock(78));
console.log(minuteToClock(450));
console.log(minuteToClock(1441));
*/
  
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
console.log(firstMenuItem);*/




