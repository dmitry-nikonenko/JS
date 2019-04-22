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






