'use strict'

//======================= task 01 =================


/*
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре, 
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */
// let name = 'генератор защитного поля';
// let price = 1000;
// price = 2000;
// console.log(`Выбран  ${name}, цена за штуку ${price} кредитов`);

//====================== task 02 =====================


/*Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.*/



//==================== task 03 ======================


/*Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).*/
// let min = 40;
// if (min >= 0 && min <= 15) {
//     alert('first')
// } else if (min >= 16 && min <= 30) {
//     alert('two')
// } else if (min >= 31 && min <= 45) {
//     alert('3')
// } else if (min >= 46 && min <= 60)  {
//     alert('4')
// }

//==================== task 04 =======================



/*
  Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/


// const day = 17;
// const month = 10;
// const year = 2048;
// const date = `${day} \\\ ${month} \\\ ${year}`;
// const message = `Доброе утро, cегодня ${date}, за бортом отличная погода!`
// console.log(date)
// console.log(message)    


//==================== task 05 ============================


/*
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';
// let message = `${name } прибывает на отдых ${date } v ${roomType} `;

// console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс


//================== task 06 ===============================


/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Ожидаю ввода пароля'.
  
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
    
  - Если что-то другое — показывать alert с сообщением 'Активирована система защиты!'
*/

// const correctPassword = 'fish';
// let number = prompt('Enter password');
// if (number === null) {
//     alert('Ожидаю ввода пароля')
// } else if (number === correctPassword) {
//     alert('Доступ в секретный бункер разрешен!')
// } else {
//     alert('Активирована система защиты!')
// };



//========================= task 07 =================


/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

// const total = 100;
// const ordered = 50;


// if (ordered > total) {
//     alert('На складе недостаточно твоаров!')
// } else if (ordered === total) {
//     alert('Вы забираете весь товар cо склада!')
// } else {
//     alert('Заказ оформлен, с вами свяжется менеджер')
// };




//===================== task 08 =====================

/*
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/

// let number = prompt('Введите произвольное целое число');
// if (number === null) {
//     alert('Ну и ладно, пошли в жопу сукины дети!!!!')
// } else if (number % 1 === 0) {
//     alert('Спасибо!')
// } else {
//     alert('Необходимо было ввести целое число!')
// };

//===================== task 09 =====================

/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное
  PS: попробуй использовать тернарный оператор
*/

// const value = Number.parseInt(Math.random()*100);
// let type;

//  if(value % 2 === 0) { 
//     type = 'even'
// } else {
//     type ='odd'
// }

// console.log(`${value} is ${type}`);

//========================= taks 10 ==================

/* 
  Создай скрипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// let number = Number(prompt('enter number'));
// if(number === 0) {alert('Очень жаль, приходите еще!')} else if (number < 0 || number > 5 ){ alert('fuck you!!!')}
// switch(number){
//         case 1:
//         alert("Каталог хостелов");
//         break;
//         case 2:
//         alert("Каталог бюджетных отелей");
//         break;
//         case 3:
//         alert("Каталог отелей ***");
//         break;
//         case 4:
//         alert( "Каталог отелей ****");
//         break;
//         case 5:
//         alert("Каталог лучших отелей");
//         break;

// }


//==================== task 11 ============================

/* 
  Пользователь может оформить доставку товара к себе в страну, 
  указав ее в переменной country, но доставка есть не везде.
  
  Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
  Сообщение выглядит так: "Доставка в <<тут страна>> будет стоить <<тут цена>>"
  
  Ниже приведен список стран и стоимость доставки.
  
    Китай - 100 кредитов
    Южная Америка - 250 кредитов
    Австралия - 170 кредитов
    Индия - 80 кредитов
    Ямайка - 120 крдитов
  
  Если названия нет в списке, то выводи в консоль сообщение "В вашей стране доставка не доступна".
  Протестируй работоспособность кода подставив разные значения в переменную country.
  
  PS: используй switch
*/
// const country = 'Индия';

// let country = prompt('Country')
// let price;
// if(country !== null){
// switch(country){
//             case "Китай":
//             price ="100 кредитов";
//             break;
//             case "Южная Америка":
//             price ="250 кредитов";
//             break;
//             case "Австралия":
//             price ="170 кредитов";
//             break;
//             case  "Индия":
//             price = "80 кредитов";
//             break;
//             case "Ямайка":
//             price = " 120 крдитов";
//             break;
//             default:
//             alert("В вашей стране доставка не доступна"); 
//             }

//         }  
//         alert(`Доставка в ${country} будет стоить ${price}`);




//========================= *tasks HOMEWORK ====================

/*
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

 const sharm = 15;
const hurgada = 25;
const taba = 6;
let confirmation;
let hotel = prompt('Enter a number of vacant places');

if (hotel < 0 || hotel % 1 !== 0) {
   alert('Ошибка ввода')
} else if (hotel === null) {
   alert('Нам очень жаль, приходите еще!')

} else if (hotel <= 6) {
   confirmation = confirm('There is a vacant place for you in Taba')
   if (confirmation) {
       alert('Bon voyage in Taba')
   } else {
       alert('Извините, столько мест нет ни в одной группе!')
   }
} else if (hotel >= 7 && hotel <= 15) {
   confirmation = confirm('There is a vacant place for you in Sharm')
   if (confirmation) {
       alert('Bon voyage in Sharm')
   } else {
       alert('Извините, столько мест нет ни в одной группе!')
   }
} else if (hotel >= 16 && hotel <= 25) {
   confirmation = confirm('There is a vacant place for you in Hurgada')
   if (confirmation) {
       alert('Bon voyage in Hurgada')
   } else {
       alert('Извините, столько мест нет ни в одной группе!')
   }
} else{
   alert('Извините, столько мест нет ни в одной группе!')
}



//======================== *task 13 HOMEWORK ================

/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/


const adminLogin = 'admin';
const adminPassword = '123';

let login = prompt('Enter login');
if (login === null) {
    alert('Отменено пользователем!')
} else if (login !== adminLogin) {
    alert('Доступ запрещен, неверный логин!')
} else if (login === adminLogin) {
    let inputPassword = prompt('Enter password')
    if (inputPassword === null) {
        alert('FUCK YOU, BITCH!!!!')
    } else if (inputPassword === adminPassword) {
        alert('Добро пожаловать!');
    } else if (inputPassword !== adminPassword) {
        alert('Доступ запрещен, неверный пароль!');
    }
}







//========================     Работа с if-else ========

//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
//  let a;
//  if(a===0) {
//      alert('true')
//  } else {alert('false')}
//  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

//  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

//  Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1



// =============================   Работа с && (и) и || (или)

//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// const a = 3;
// if (a > 0 && a < 5) {
//     alert('true')
// }
// else { alert('false')
// };
//  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
//   
//  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

//  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.