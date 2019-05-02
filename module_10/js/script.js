'use strict'

/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://restcountries.eu/rest/v2/name/";

// function fetchCountryData(evt) {
//   evt.preventDefault()
// fetch(API_URL + input.value)
// .then(res=>res.json())
// .then(data=>data.forEach(el=>
//     result.innerHTML =
//     `<img src="${el.flag }" alt="">
//     <p>${el.capital}</p>
//     <p>${el.currencies[0].name}</p>
//     <p>${el.name}</p>`
// ))
// .catch(err=>console.error('РУКОЖОП СРАНЫЙ',err))
// }

// form.addEventListener("submit", fetchCountryData);

//---------------------------------------------------------------------------------------------------------------


/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://api.github.com/users/";

// function fetchUserData(evt) {
//   evt.preventDefault()
// fetch(API_URL + input.value)
// .then(res=>res.json())
// .then(el=>
//     result.innerHTML =
//     `<img src="${el.avatar_url }" alt="">
//     <p>${el.login}</p>
//     <p>${el.bio}</p>
//     <p>${el.public_repos}</p>`
// )
// .catch(err=>console.error('РУКОЖОП СРАНЫЙ',err))
// }


// form.addEventListener("submit", fetchUserData);

//-------------------------------------------------------------------------------------------------------

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/
// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".user-table");
// const getBtn = document.querySelector(".js-get");



// function fetchUsers(evt) {
//     evt.preventDefault()
//   fetch('https://jsonplaceholder.typicode.com/users/')
//   .then(response => {
//     if(response.ok) return response.json()
    
//     throw new Error('Error')
//      })
//   .then(data => {
//     console.log(data); 
//     data.reduce((acc, el) => 
//     userTable.innerHTML = acc + 

//       `<tr>
//           <th>Имя ${el.name}</th>
//           <th>Почта ${el.email}</th>
//           <th>Город ${el.address.city}</th>
//           <th>Вебсайт${el.website}</th>
//           <th>Компания${el.company.name}</th>
//       </tr>`, ''
  
//   )})
//   .catch(err => console.error('Error', err))
// }


// form.addEventListener("submit", fetchUsers)


// --------------------------------------------------------------------------------------------------

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");




// function getUserById(evt) {
//       evt.preventDefault()
//       const API_URL = `https://jsonplaceholder.typicode.com/users/${input.value}`
//       fetch(API_URL)
//       .then(response => {
//             if(response.ok) return response.json()
            
//             throw new Error(result.innerHTML=`<p>Ошибка! Пользователя с таким id не существует</p>`)
//              })
//       .then(data => result.innerHTML =
//           `
//               <p>Имя ${data.name}</p>
//               <p>Почта ${data.email}</p>
//               <p>Город ${data.username}</p>
             
//           `
      
//       )
//       .catch(err => console.error('Error', err))
    
    
// }

// form.addEventListener("submit", getUserById);

//------------------------------------------------------------------------------------------------------------


/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const getUsers = document.querySelector(".get-users");
const getById = document.querySelector(".get-byId-users");
const addUsers = document.querySelector(".add-users");
const removeUsers = document.querySelector(".remove-byId-users");
const updateUserInfo = document.querySelector(".update-users");

const inputById = document.querySelector("#get-byId-input");
const inputUserName = document.querySelector("#user-name");
const inputUserAge = document.querySelector("#user-age");
const inputRemove = document.querySelector("#remove-byId-input");
const inputUpdateId = document.querySelector("#user-id");
const inputUpdateName = document.querySelector("#update-name");
const inputUpdateAge = document.querySelector("#update-age");

const result = document.querySelector(".result");
const URL = "https://test-users-api.herokuapp.com/users/";

function getAllUsers(e) {
	e.preventDefault();
	return fetch(URL)
		.then(response => {
			if (response.ok) return response.json();

			throw new Error(`Error: ${response.statusText}`);
		})
		.then(data => data.data)
		.then(arr => updateIF(arr))
		.catch(err => console.log(err));
}

function updateIF(arr) {
	let n = 0;
	let markUp = arr.reduce(
		(acc, el) =>
			acc +
			`
  <tr>
  <td>${(n += 1)}</td>
  <td>${el.id}</td>
  <td>${el.name}</td>
  <td>${el.age}</td>
  </tr>
  `,
		`<th>N</th><th>ID</th><th>Name</th><th>Age</th>`
	);

	result.innerHTML = markUp;
}

function getUserById(e) {
	e.preventDefault();

	return fetch(`${URL + inputById.value}`)
		.then(response => {
			if (response.ok) return response.json();

			throw new Error(`Error: ${response.statusText}`);
		})
		.then(data => data.data)
		.then(obj => updateIFObj(obj))
		.catch(err => console.log(err));
}

function updateIFObj(obj) {
	let n = 0;
	result.innerHTML = `
  <th>N</th>
  <th>ID</th>
  <th>Name</th>
  <th>Age</th>
  <tr>
    <td>${(n += 1)}</td>
    <td>${obj.id}</td>
    <td>${obj.name}</td>
    <td>${obj.age}</td>
  </tr>
  `;
	getById.reset();
}

function addUser(e) {
	e.preventDefault();

	let newPost = {
		name: `${inputUserName.value}`,
		age: `${inputUserAge.value}`
	};

	fetch(URL, {
		method: "POST",
		body: JSON.stringify(newPost),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		}
	})
		.then(data => data.json())
		.then(res => console.log(res));

	addUsers.reset();
}

function removeUser(e) {
	e.preventDefault();

	fetch(`${URL + inputRemove.value}`, {
		method: "DELETE"
	})
		.then(response => {
			if (response.ok) return response.json();

			throw new Error(`Error: ${response.statusText}`);
		})
		.then(res => console.log(res))
		.catch(err => console.log(err));
	removeUsers.reset();
}

function updateUser(e) {
	e.preventDefault();

	let updateUserData = {
		name: `${inputUpdateName.value}`,
		age: `${inputUpdateAge.value}`
	};

	fetch(`${URL + inputUpdateId.value}`, {
		method: "PUT",
		body: JSON.stringify(updateUserData),
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		}
	})
		.then(data => data.json())
		.then(res => console.log(res));

	updateUserInfo.reset();
}

getUsers.addEventListener("submit", getAllUsers);
getById.addEventListener("submit", getUserById);
addUsers.addEventListener("submit", addUser);
removeUsers.addEventListener("submit", removeUser);
updateUserInfo.addEventListener("submit", updateUser);







