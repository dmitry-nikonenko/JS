'use strict'


//Задание 1 Вывести числа от 4 до 400 на экран.
// let i = 4;
// for(let i = 4; i<= 400; i+=1){
//          console.log(i)
//      }


//=============================task 3 ===============

//Задание 2 Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

// let i = 4;
// for(let i = 4; i<= 13; i+=3){
//          console.log(i)
//      }

//=============================task 4 ===============

//Задание 3 Вывести числа 654 653 652 до нуля.
// let i = 654;
// for(let i = 654; i>= 0; i-=1){
//          console.log(i)
//      }


//=============================task 5 ===============

//Задание 4 Вывести все годы с 1983 до 2017.

// let i = 4;
// for(let i = 4; i<= 13; i+=3){
//          console.log(i)
//      }


//============================== task 6 ===============

//Задание 8 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num

// let i = 1000;
// for(let i = 1000; i>30; i/=2){
//          console.log(i)
//      }

// let mass = 0;
// let count = 1000;
// while(count > 50){
//    mass += 1;
//    count /=2;
// console.log(mass, count);    
// }

//============================== task 7 =================================

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let mass = [2, 5, 9, 15, 0, 4]
// for(let i = 0; i<mass.length; i+=1){
//         if(mass[i]>3 && mass[i]<10){
//             console.log(mass[i]);
//         }}

//==============================task 8 =================================

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let mass = [2, 5, -9, 15, -1, 4];



// let newplus
// let newminus

// for(let i = 0; i<mass.length; i+=1){
// if(mass[i]<0){
//          newplus.push(mass[i])    
//  } else (mass[i]>0){newminus.push(mass[i])}
// }
// console.log (newminus);
// console.log (newplus)



// let sum =0;
// for(let i = 0; i<mass.length; i+=1){
//     if(mass[i]>=0){
//         sum += mass[i];}
// }
// console.log(sum)


//=========================== tasks 9 =======================

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let num = prompt('lets go...')
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for(let i = 0; i<arr.length; i+=1){
//         if(arr[i] === 4){
//            alert('ЕСТЬ!!!');
//         break;}
//     };


//============================ task 10 =====================

// Дан массив числами, например: ['10', '20', '30', '50', '235', '3000']. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. 
// let mass = ['10', '20', '30', '50', '235', '3000'];

// for(let i = 0; i < mass.length; i +=1){
//    if (mass[i][0] === '1' || mass[i][0] === '2' ||  mass[i][0] === '5' ){
//    console.log(mass[i]);}
// }

//=========================== task 11 =========================

/*
* Есть массив имен пользователей users
*
* Напиши цикл, который для каждого пользователя будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента]. 
* 
* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
*
* Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
*/

// const mass = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// let a = 0;

// for(let key of mass){
//         if(key.length>0){ a += 1;}
//         console.log(a,key)
//         }



//========================== task 12 =========================

/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
// console.log(words);

// Выведи в консоли длину массива words
// console.log(); // 8

// Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// console.log(price); // 80

// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;
// let words = message.split (' ')
// console.log(words)
// let s = words.length
// console.log(s)
// for(let i = 0; i<words.length; i ++){
//         price += 10;
//     }
// console.log(price);
//============================= task 13 ============================

/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
  
  PS: используй бесконечный цикл с прерыванием
*/

// let num;
// do{
//     num = Number(prompt("угадай число, получи бананчик")); 
//     if ( num > 100){alert ('Ты мой сладенький')} else if(num <= 100) {alert('попробуй еще раз')}
// } while(num !== 0 && num <= 100)


//============================= task 14 ===============================


 /*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];
//  for(let key of numbers){
//     if(key>10){matched.push(key)}
//     }
// console.log(matched); 

//==================== task 15 ===============================================

/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = "May the force be with you";
// let longestWord = 0;
// let s = message.split(' ')
// let word

// for(let i = 0; i<s.length; i += 1){
//             if(s[i].length>longestWord){
//                 longestWord=s[i].length
//                 word=s[i]
//             }}
// console.log(longestWord)
// console.log(word)
        


//================== task 16 ===============================================


/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];


//============================= task 17 ===================================

/*
  Напиши скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/


//============================= ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =============================

/*
  
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];


//========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================

/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
  🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
      символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
      'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
      в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

// let userInput;
// const numbers = [];
// let total = 0;


//========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================

/*
  
  Напишите скрипт имитирующий авторизацию пользователя.
  
  Есть массив паролей зарегистрированных пользователей passwords. 
  
  При посещении страницы, необходимо попросить пользователя ввести свой пароль,
  после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
  Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
  Подсказка: используйте цикл do...while.
  Если был введен пароль который есть в массиве passwords, вывести alert 
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
  Если был введен не существующий пароль, отнять от лимита попыток единицу, 
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
  где n это оставшийся лимит. 
  
  После того как пользователь закрыл alert, запросить пароль снова. 
  Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
  существующий пароль, не кончатся попытки или пока пользователь 
  не нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  
  Если пользователь нажмет Cancel, прекратить выполнение цикла.
*/

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;