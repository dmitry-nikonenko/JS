'use strict'

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const items = document.querySelectorAll(`.categories li`)
// items.forEach(item => {
//    console.log(`Категория:`, item.firstChild);

//    console.log(`Количество вложенных li:`, item.firstElementChild.children.length);
// })

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// let list = document.querySelector('.list');
// console.log(list.firstElementChild.style.color='red');
// console.log(list.lastElementChild.style.color='blue');

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const a = document.querySelector('.list')
// let newA=elements.reduce((acc, el)=> acc + `<li>${el}</li>`," ");
// a.innerHTML=newA;
// console.log(a);

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

// const a = document.querySelector('.gallery')
// galleryItems.forEach( el=> { 
//     a.innerHTML += `<li><img src=${el.url} alt=${el.alt} width = 300 height = 200> </li>`
// } );
// a.style.listStyle='none';
// a.style.display='flex';


/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
// let listItem = document.querySelectorAll('.size-filter input');
// const newArr = [];

// listItem.forEach(el => {
//  el.hasAttribute('checked') ? newArr.push(el) : null;
// });

// console.log(newArr);

// const collectInputData = inputs => {
//  return inputs.map(el => el.value);;
// }

// console.log(collectInputData(newArr));


 /*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// let body = document.body;
// let createDiv = document.createElement('div');
// let createDiv2 = document.createElement('div'); 
// let createImg = document.createElement('img');
// let createH2 = document.createElement('h2');
// let createP1 = document.createElement('p'); 
// let createP2 = document.createElement('p'); 
// let createP3 = document.createElement('p'); 
// body.prepend(createDiv);
// createDiv.prepend(createImg)
// createDiv.append(createDiv2)
// createDiv2.prepend(createH2)
// createDiv2.append(createP1)
// createDiv2.append(createP2)
// createDiv2.append(createP3)
// createDiv.className ='movie'
// createDiv2.className='movie__body'
// createImg.setAttribute('src','http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg')
// createH2.className='movie__title'
// createP1.className='movie__description'
// createP2.className='movie__date'
// createP3.className='movie__rating'
// createH2.textContent='The Godfather'
// createP1.textContent='Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.'
// createP2.textContent='Released: 1972-03-14'
// createP3.textContent='Rating: 8.6'

// console.log(createDiv);


// createDiv.innerHTML+=`<img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">
    
// <div class="movie__body">
//   <h2 class="movie__title">The Godfather</h2>
//   <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
//     would-be killers, launching a campaign of bloody revenge.</p>

//   <p class="movie__date">Released: 1972-03-14</p>
//   <p class="movie__rating">Rating: 8.6</p>
// </div>`
// console.log(createDiv)
// let body = document.body;
// body.prepend(createDiv)

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

// const list = document.querySelector("#root");

// const createBoxes = num => {
//   let j = 30;
//   for (let i = 0; i < num; i++) {
//     const createDiv = document.createElement("div");
    
//     function getRandomInt(min, max) {
//        return Math.floor(Math.random() * (max - min + 1)) + min;
//         }
//     let r = getRandomInt(0, 255);
//     let g = getRandomInt(0, 255);
//     let b = getRandomInt(0, 255);
    
//     createDiv.setAttribute("style", `width:${j}px; height:${j}px; background-color: rgb(${r}, ${g}, ${b})`);
//     list.append(createDiv);
//     j += 10;
//   }
// };


// createBoxes(50);


/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

  function createPostCard(post) {
	//select root
	let root = document.querySelector("#root");

	//create el
	let card = document.createElement("div");
	let cardImage = document.createElement("img");
	let cardBody = document.createElement("div");
	let cardTitle = document.createElement("h2");
	let cardText = document.createElement("p");
	let cardLink = document.createElement("a");

	//classes
	card.classList.add("card");
	cardImage.classList.add("card__image");
	cardBody.classList.add("card__body");
	cardTitle.classList.add("card_title");
	cardText.classList.add("card__text");
	cardLink.classList.add("card__link");

	//attributs
	cardImage.setAttribute("src", post.img);
	cardLink.setAttribute("href", "#");

	//textContent
	cardTitle.textContent = post.title;
	cardText.textContent = post.text;
	cardLink.textContent = post.link;

	//paste el to html
	root.append(card);
	card.append(cardImage);
	card.append(cardBody);
	cardBody.append(cardTitle);
	cardBody.append(cardText);
	cardBody.append(cardLink);
}

function createCards(posts) {
	posts.forEach(element => {
		createPostCard(element);
	});
}

createCards(posts);