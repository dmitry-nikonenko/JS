'use strict'

// //====================== task01 ==================

// //  Выведите на экран зарплату Пети и Коли.
// let obj = {Коля: '1000', Вася: '500', Петя: '200'};

// console.log(obj['Коля'], obj['Петя']);

// //====================== task02 ==================

// // Дан многомерный массив arr:
// var arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };

// // // Выведите с его помощью слово 'голубой'.

// console.log(arr.ru[0]);

// //====================== task03 ==================

// // Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
// var obj = {a: 1, b: 2, c: 3};
// console.log(obj['c'])
// console.log(obj.c)



// //====================== task04 ==================

// // Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let week = {
//     '1': 'Monday',
//     '2': 'tuesday',
//     '3': 'wednesday',
//     '4': 'friday'
// }
// console.log(week['1'])

// //====================== task05 ==================

// // Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// let week = {
//     '1': 'Monday',
//     '2': 'tuesday',
//     '3': 'wednesday',
//     '4': 'friday'
// }
// let day = week['3'];
// console.log(day)
// //====================== task06 ==================

// // Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день)

// let arr = {
// 	'ru':['понедельник', 'вторник', 'среда'],
// 	'en':['Monday', 'tuesday', 'wednesday'],
// };
// console.log(arr.ru[0], arr.en[0]);


// //====================== task07 ==================

// // Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

// let lang = 'ru';
// let day = 2;

// let arr = {
// 	'ru':['понедельник', 'вторник', 'среда'],
// 	'en':['Monday', 'tuesday', 'wednesday'],
// };

// console.log(arr[lang][day])
// //====================== task08 ==================

// /*  
//   Напиши скрипт, который, для объекта user, последовательно: 
  
//     - добавляет поле mood со значением 'happy'
    
//     - заменяет значение hobby на 'javascript'
    
//     - заменяет значение premium на false
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.keys и for...of
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.entries и for...of
// */

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
//   user.mood = "happy";
//   user.hobby = "javascript";
//   user.premium = false;

//   console.log(user)

//   const keys = Object.keys(user);
//     console.log(keys);

//     for(let key of keys){
//         console.log(key);
//         let newKey = key[0];
//         let newWalues = key[1]
//         console.log(`${newKey}--${newWalues}`);
//     }

//   const entries = Object.entries(user);
//     console.log(entries);
  
//  for(let key of entries){
//         // console.log(key);
//         let newKey = key[0];
//         let newWalues = key[1]
//         console.log(`${newKey}--${newWalues}`)
//     } 


// //====================== task09 ==================

// /*
//   Напиши скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"
// */

// const tasks = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };

//   let a = 0;
//   let name;
//   for(let key in tasks){
//       if(a<tasks[key]){
//           a=tasks[key]
//           name=key
          
//       }
//   }
//   console.log(a)
//   console.log(name)
// //====================== task10 ==================

// /*  
//   Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
//   Функция возвращает количество свойств.
// */

// // Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3

// //====================== task11 ==================

// /*  
//   Напиши функцию isObjectEmpty(obj), которая получает 
//   один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
//   Возвращает true если объект пустой, false если не пустой.
// */

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  

// //====================== task12 ==================

// /*  
//   Напиши функцию isObjectEmpty(obj), которая получает 
//   один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
//   Возвращает true если объект пустой, false если не пустой.
// */

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  




//   //====================== task13 ==================

// /*  
//   Напиши функцию countTotalSalary(salaries). 
  
//   Функция получает объект зарплат и считает общую сумму запрплаты работников.
//   Возвращает общую сумму зарплаты.
  
//   Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
// */

// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
  
  
//   //====================== task14 ==================

// /*  
//   Напиши функцию getAllPropValues(arr, prop), 
//   которая получает массив объектов и имя ключа. 
//   Возвращает массив значений определенного поля prop
//   из каждого объекта в массиве
// */

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []

// //====================== task15 ==================

//     /*  
//  * Расставь отсутствующие this в методах объекта account
// */

// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//       discount = value;
//     },
//     getOrders() {
//       return orders;
//     },
//     addOrder(cost, order) {
//       balance -= cost;
//       orders.push(order);
//     }
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   const orders = account.getOrders();
//   console.log(orders); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, "order-4");
//   console.log(account.balance); // 19000
//   console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']