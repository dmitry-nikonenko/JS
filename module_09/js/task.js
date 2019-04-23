'use strict'

/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548"
// ];



// let timerId = null;

// const onColorChange = () => {
//     let color = Math.floor(Math.random() * 8) + 1;
//     return document.querySelector('body').style.backgroundColor = colors[color];
// }

// const onStartHandler = () => !timerId ? timerId = setInterval(onColorChange, 100) : null;

// const onStopHandler = () => {  
//     clearInterval(timerId);
//     return timerId = null;
// }

// document.querySelector('.js-start').addEventListener('click', onStartHandler);
// document.querySelector('.js-stop').addEventListener('click', onStopHandler);


//-------------------------------------------------------------------------------------------------------------------

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/
// let a;
// let b;
// function getFormattedTime(time) {
//     const day =new Date(time)
    
//      a = `${day.getMinutes()}:${day.getSeconds()}:${parseInt (day.getMilliseconds()/100)}`
//     return a;
//   }
  
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2

//----------------------------------------------------------------------------------------------------------


// const timer = {
//   startTime: 0,
//   deltaTime: null,
//   id: null,
//   pauseTime: 0,
//   isActive: false
// };

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// startBtn.addEventListener('click', handleClickStart);
// stopBtn.addEventListener('click', handleClickStop);
// stopBtn.addEventListener('dblclick', handleClickReset);



// function handleClickStart () {
//   if(!timer.isActive) {
//     timer.isActive = true;
//     this.pauseTime = 0;
    
//     timer.startTime = new Date() - timer.pauseTime;
//     // console.log('timer.startTime', timer.startTime);
//     timer.id = setInterval(() => {
//       let currentTime = new Date();
    
//       timer.deltaTime = currentTime - timer.startTime;
//       let time = new Date(timer.deltaTime);
//       updateClockface(clockface, time)
//     }, 100); 
//   }
// }

// function handleClickStop (time) {
//   timer.pauseTime = timer.deltaTime;
  
//   clearInterval(timer.id);
  
//   timer.isActive = false;
//   timer.startTime = 0;
//   timer.id = null;
  
// }

// function handleClickReset() {
//   // console.log('reset');
//   timer.isActive = false;
//   clearInterval(timer.id);
//   timer.id = null;
//   timer.startTime = 0;
//   timer.deltaTime = 0;
//   updateClockface(clockface, timer.startTime)
// }

// /*
// * Обновляет поле счетчика новым значением при вызове
// * аргумент time это кол-во миллисекунд
// */
// function getFormattedTime(time) {
//   let date = new Date(time);
//   let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//   let sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
//   let ms = Math.floor(date.getMilliseconds() /100)
//   return `${min}:${sec}.${ms}`;
  
// }

// function updateClockface(el, time) {
//   el.textContent = getFormattedTime(time);
// }

// /*
// * Подсветка активной кнопки
// */
// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }
  
//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
  
//   target.classList.add('active');
// }
//------------------------------------------------------------------------------------------------------

/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 * 
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 * 
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 * 
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 * 
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 * 
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
*/

const DELAY = 1000;
const quantity = 100;

// Вызовы функции для проверки
processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(500)
  .then(console.log) // К сожалению на складе недостаточно товаров!
  .catch(console.log);

processOrder("lorem")
  .then(console.log)
  .catch(console.log); // Некорректный ввод!



//-------------------------------------------- HOMEWORK-----------------------------------------------


/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', (если кнопка активная, добавляем текст контент пауза и логику для стоп)
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

// class Stopwatch {
//   constructor(link) {
//     this.link = link;
//     this.isActive = false;
//     this.startTime = null;
//     this.timerID = null;
//     this.pauseTime = null;
//     this.delta = null;
//     this.curentTime = null;
//     this.ms = null;
//     this.sec = null;
//     this.min = null;
//     this.arrLaps =[];
//     this.length = null;
//     this.html = '';
//     this.li = '';
//     this.createHtml(link);
    
//     this.btnStart = document.querySelector(`.${this.link.className} .js-start`);
//     this.btnStop = document.querySelector(`.${this.link.className}.js-stop`);
//     this.timeInterface = document.querySelector(`.${this.link.className} .js-time`);
//     this.btnReset = document.querySelector(`.${this.link.className} .js-reset`);
//     this.btnLaps = document.querySelector(`.${this.link.className} .js-take-lap`);
//     this.listLaps = document.querySelector(`.${this.link.className} .js-laps`);

//     this.btnLaps.addEventListener('click', this.addLaps.bind(this));
//     this.btnReset.addEventListener('click', this.reset.bind(this));
//     this.btnStart.addEventListener('click', this.timer.bind(this));
//   }

//   createHtml(link) {
//     this.html = `
//     <div class="${this.link.className}">
//         <p class="time js-time">00:00.0</p>
//         <button class="btn js-start">Start</button>
//         <button class="btn js-take-lap">Lap</button>
//         <button class="btn js-reset" disabled>Reset</button>
//       </div>
//     <ul class="laps js-laps"></ul>
//     `
//     link.insertAdjacentHTML('afterbegin', this.html);
//   }
//   timer() {
//     if(!this.isActive) {
//       this.start();
//     } else {
//       this.stop();
//     } 
//   }
//   start() {
//     this.isActive = true;
//     this.btnReset.removeAttribute('disabled');
//     this.startTime = Date.now() - this.pauseTime;

//     this.timerID = setInterval(() =>  {
      
//       this.curentTime = Date.now();
//       this.delta = new Date(this.curentTime - this.startTime);

//       this.ms = Math.floor(this.delta.getMilliseconds()/100);
//       this.sec = this.delta.getSeconds();
//       this.min = this.delta.getMinutes();

//       this.min = this.min < 10 ? '0' + this.min : this.min;
//       this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
        
//       this.timeInterface.textContent = `${this.min}:${this.sec}.${this.ms}`;
//       this.pauseTime = this.delta;
//     },100);
//     this.btnStart.textContent = 'Pause';
//   }
//   stop() {
//     this.isActive = false;
//     this.btnStart.textContent = 'Continue';
//     clearTimeout(this.timerID);
//   }
//   reset() {
//   clearTimeout(this.timerID);
//   this.isActive = false;
//   this.startTime = null;
//   this.pauseTime = null;
//   this.btnStart.textContent ='Start';
//   this.timeInterface.textContent = '00:0.0';
//   this.btnReset.setAttribute('disabled','disabled');
//   this.listLaps.innerHTML = `<ul class="laps js-laps"></ul>`;  
//   }
//   addLaps() {
//     this.arrLaps.push(this.delta);
//     this.length = this.arrLaps.length;

//     this.ms = Math.floor(this.arrLaps[this.length-1].getMilliseconds()/100);
//     this.sec = this.arrLaps[this.length-1].getSeconds();
//     this.min = this.arrLaps[this.length-1].getMinutes();

//     this.min = this.min < 10 ? '0' + this.min : this.min;
//     this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
//     this.li = `<li>${this.min}:${this.sec}.${this.ms}</li>`;
//     this.listLaps.insertAdjacentHTML('afterbegin', this.li);
//   }

// }

// const link2 = document.querySelector('.stopwatch2');
// const stopwatch2 = new Stopwatch(link2);

// const link3 = document.querySelector('.stopwatch3');
// const stopwatch3 = new Stopwatch(link3);

// const link4 = document.querySelector('.stopwatch4');
// const stopwatch4 = new Stopwatch(link4);
