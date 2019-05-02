'use strict'

// /*
// * К pen уже подключен Handlebars.
// * Используй встроенные шаблоны и метод Handlebars.compile
// * 
// * Создай шаблон элемента списка указаного на вкладке HTML.
// * Отрендери список в DOM по данным из массива products.
// */

// const assW = [
//     { name: "Apples", quantity: 50 },
//     { name: "Grapes", quantity: 44 },
//     { name: "Cheese", quantity: 128 },
//     { name: "Milk", quantity: 93 }
//   ];  
  
// const list = document.querySelector('.products')
// const box = document.querySelector('#box').innerHTML.trim()
// const comp = Handlebars.compile(box)
// const rest = comp(assW)  
// list.insertAdjacentHTML('afterbegin',rest)
//---------------------------------------------------------------------------------------

/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 * 
 * Создай шаблон поста указаного на вкладке HTML.
 * Отрендери список постов в DOM по данным из массива posts.
 * 
 * Если в объекте поле favourite=true, в посте должна быть 
 * разметка иконки избранного поста, в противном случае,
 * разметки иконки быть не должно.
*/

// const post = [
//     {
//       title: "Phasellus volutpat metus",
//       text:
//         "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
//       favourite: true
//     },
//     {
//       title: "Nulla consequat massa",
//       text:
//         "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//       favourite: false
//     },
//     {
//       title: "In enim justo",
//       text:
//         "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
//       favourite: true
//     },
//     {
//       title: "Vestibulum ante ipsum",
//       text:
//         "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.",
//       favourite: false
//     }
//   ];

// const list = document.querySelector('.posts')
// const box = document.querySelector('#box').innerHTML.trim()
// const comp = Handlebars.compile(box)
// const rest = comp(post)  
// list.insertAdjacentHTML('afterbegin',rest)

/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

// const firstname = document.getElementById("first_name");
// const lastname = document.getElementById("last_name");
// const submitBtn = document.getElementById("submit-btn");

// submitBtn.addEventListener("click", validate);

// function validate(evt) {}

//----------------------------------------------------------------------------------------------------------


/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

const laptops = [
	{
	  size: 13,
	  color: 'white',
	  price: 28000,
	  release_date: 2015,
	  name: 'Macbook Air White 13"',
	  img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
	  descr:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
	  size: 13,
	  color: 'gray',
	  price: 32000,
	  release_date: 2016,
	  name: 'Macbook Air Gray 13"',
	  img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
	  descr:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
	  size: 13,
	  color: 'black',
	  price: 35000,
	  release_date: 2017,
	  name: 'Macbook Air Black 13"',
	  img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
	  descr:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
	  size: 15,
	  color: 'white',
	  price: 45000,
	  release_date: 2015,
	  name: 'Macbook Air White 15"',
	  img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
	  descr:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
	  size: 15,
	  color: 'gray',
	  price: 55000,
	  release_date: 2016,
	  name: 'Macbook Pro Gray 15"',
	  img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
	  descr:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
	  size: 15,
	  color: 'black',
	  price: 45000,
	  release_date: 2017,
	  name: 'Macbook Pro Black 15"',
	  img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
	  descr:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
	  size: 17,
	  color: 'white',
	  price: 65000,
	  release_date: 2015,
	  name: 'Macbook Air White 17"',
	  img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
	  descr:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
	  size: 17,
	  color: 'gray',
	  price: 75000,
	  release_date: 2016,
	  name: 'Macbook Pro Gray 17"',
	  img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
	  descr:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
	{
	  size: 17,
	  color: 'black',
	  price: 80000,
	  release_date: 2017,
	  name: 'Macbook Pro Black 17"',
	  img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
	  descr:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
	},
];

const form = document.querySelector('.js-form');
const btn = form.querySelector('#reset');
const inputs = Array.from(form.querySelectorAll('input'));
const catalog = document.querySelector('.catalog');
const sourse = document.querySelector('.cards').innerHTML.trim();
const template = Handlebars.compile(sourse);

let markUp = laptops.reduce((acc, laptop) => acc + template(laptop), '');
catalog.insertAdjacentHTML('afterbegin', markUp);

let filter = { 
	size: [], 
	color: [], 
	release_date: [] 
};

function checkFilter({size, color, release_date}, laptop) {

		let checkSize = size.length > 0 ? size.includes(`${laptop.size}`) : true;
		let checkColor = color.length > 0 ? color.includes(`${laptop.color}`) : true;
		let checkRelease = release_date.length > 0 ? release_date.includes(`${laptop.release_date}`) : true;

		if(checkSize && checkColor && checkRelease){
			return true;
		} 
		return false;
}


function showStatus(e) {
	e.preventDefault();
	catalog.innerHTML = '';

	inputs.forEach(el => {
		if(el.checked) {
			filter[el.name].push(el.value);
		}
	});

	markUp = laptops.reduce((acc, laptop) => {
		if(checkFilter(filter, laptop)) {
			acc += template(laptop)
		} return acc;
	}, '');

	catalog.insertAdjacentHTML('afterbegin', markUp);

	filter = { 
		size: [], 
		color: [], 
		release_date: [] 
	};
}

function clear() {
	catalog.innerHTML = '';
	markUp = laptops.reduce((acc, laptop) => acc + template(laptop), '');
	catalog.insertAdjacentHTML('afterbegin', markUp);
}

btn.addEventListener('click', clear);
form.addEventListener('submit', showStatus)