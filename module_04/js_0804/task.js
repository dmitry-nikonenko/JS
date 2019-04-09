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
// let a = 0;
// function isObjectEmpty(obj){
//     for(key in obj) a++ 
//     if(a===0){alert("true")}else{alert('false')} return obj;
// }
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
// let a = 0;
// function countTotalSalary(salaries){
//     const values = Object.values(salaries);
//     for(let key of values){ a += key;    
//     } 
//    return a;
// } 



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

// function getAllPropValues(arr, prop){
//     for(let key of arr) {
//     if (key.hasOwnProperty(prop)) {console.log(key[prop])}}
// }


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

    /*  
 * Расставь отсутствующие this в методах объекта account
*/

// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       this.orders.push(order);
//     }
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   const orders = account.getOrders();
//   console.log(orders); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, "order-4");
//   console.log(account.balance); // 19000
//   console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']

// //====================== task16 ==================
// /*  
//   Напиши функцию-конструкор User для создания 
//   пользователя со следующим свойствами:
//     - name - строка (имя)
//     - age - число (возраст)
//     - friends - число (кол-во друзей)
  
// function User({name="default",age='0',friends='0'}){
//         this.name = name;
//         this.age = age;
//         this.friends = friends;
//         this.getInfo = function(){
//             console.log(`User ${name} is ${age} years old and has ${friends} friends`)
//         }
//     }

  
   



    //   Добавь метод getInfo(), который, выводит строку:
// //   `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`


// const mango = new User({ name: "Mango", age: 2, friends: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 friends

// const poly = new User({ name: "Poly", age: 3, friends: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 friends


// //====================== task17 ==================

// /*  
//  * Расставь отсутствующие this в конструкторе Account
// */

// function Account(login, password, type = "regular") {
//     this.login = login;
//     this.password = password;
//     this.type = type;
  
//     this.changePassword = function(newPassword) {
//       this.password = newPassword;
//     };
  
//     this.getInfo = function() {
//       console.log(`
//         Login: ${login}, 
//         Pass: ${password}, 
//         Type: ${type}
//       `);
//     };
//   }
  
//   const account = new Account("Mango", "qwe123", "premium");
  
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
  
//   account.changePassword("asdzxc");
//   console.log(account.password); // 'asdzxc'
  
//   account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  

// //====================== task18 ==================

// /*  
//  * Напиши конструктор Storage(items), который будет создавать объекты для управления складом товаров
//  * При вызове будет получать один аргумент - начальный массив товаров, и записываеть его в свойство items
//  *
//  * Добавь метод getItems, который возвращает массив текущих товаров
//  * Добавь метод addItem(item), который получает новый товар и добавляет его к текущим
//  * Добавь метод removeItem(item), который получет товар и, если он есть, удаляет его из текущих
// */

// function Storage(items){this.items=items;
//     this.getItems = function(){
//         return this.items
//     }
//     this.addItem = function(item){
//         this.items.push(item)
//     }
//     this.removeItem = function(item){
//         if(this.items.includes(item)) {
//             this.items.splice(this.items.indexOf(item), 1)}
//     }
// }




// const storage = new Storage([
//     "Нанитоиды",
//     "Пролонгер",
//     "Железные жупи",
//     "Антигравитатор"
//   ]);
  
//   const items = storage.getItems();
//   console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
//   storage.addItem("Дроид");
//   console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem("Пролонгер");
//   console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

// /* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     chicken: 50,
//     cheese: 40,
//   };
  
//   /* 
//     Необходимо создать функцию-конструктор Cashier.
    
//     Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе): 
//       - name - строка, имя кассира, передается при вызове конструктора
      
//       - productDatabase - объект база данных продуктов, передается при вызове конструктора
      
//       - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
      
//       - setCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
      
//       - countTotalPrice(order) - метод, получает объект списока покупок, считает общую стоимость покупок.
//         🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
//            а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
//            Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
       
//       - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
//           * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
//           * Если денег было передано достаточно, возвращает разницу денег.
//           * Если в customerMoney меньше денег чем в totalPrice, возвращает null 
          
//       - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.
      
//       - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'   
      
//       - reset() - метод, сбрасывает поле customerMoney 0.
//   */
  
//   function Cashier(name, productDatabase) {
//     // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
//   }
  
//   /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
//   const order = {
//     bread: 2,
//     milk: 2,
//     apples: 1,
//     cheese: 1
//   };
  
//   /* Пример использования */
//   const mango = new Cashier('Mango', products);
  
//   // Проверяем исходные значения полей
//   console.log(mango.name); // Mango
//   console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
//   console.log(mango.customerMoney); // 0
  
//   // Вызываем метод countTotalPrice для подсчета общей суммы
//   // передавая order - список покупок пользователя
//   const totalPrice = mango.countTotalPrice(order);
  
//   // Проверям что посчитали
//   console.log(totalPrice); // 110
  
//   // Вызываем setCustomerMoney для запроса денег покупателя
//   mango.setCustomerMoney(300);
  
//   // Проверяем что в поле с деньгами пользователя
//   console.log(mango.customerMoney); // 300
  
//   // Вызываем countChange для подсчета сдачи
//   const change = mango.countChange();
  
//   // Проверяем что нам вернул countChange
//   console.log(change); // 190
  
//   // Проверяем результат подсчета денег
//   if(change !== null) {
//      // При успешном обслуживании вызываем метод onSuccess
//     mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
//   } else {
//     // При неудачном обслуживании вызываем метод onError   
//     mango.onError(); // Очень жаль, вам не хватает денег на покупки
//   }
  
//   // Вызываем reset при любом исходе обслуживания
//   mango.reset();
  
//   // Проверяем значения после reset
//   console.log(mango.customerMoney); // 0

