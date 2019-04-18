'use strict'

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// let btn = document.querySelector('.button');
// let count = 0;
// function newBtn(){
//       count++
//     btn.textContent= count;
// }
// btn.addEventListener('click', newBtn)

//--------------------------------------------------------------------------------------------------------------


// 
//   Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
//   получите числа которые бьудут введены в инпуты и запишите их сумму в span.result

// const container = document.querySelector('.container');
// const input = container.querySelectorAll('input');
// const result = container.querySelector('.result');
// const btn = document.querySelector('button')
// const getInputValue = ([...input]) => input.reduce((acc, inp) => acc += parseFloat(inp.value), 0)

// const onClickHandler = (evt) => {
//   if(evt.target.type === 'submit') {
//     const value = getInputValue(input);
//     const summ = !isNaN(value) ? value : `<p class='error'>Введите число!</p>`;
//     result.innerHTML = summ;
//   }  
// }

// container.addEventListener('click', onClickHandler)

// function plus(){
//  let a = Number(input[0].value)
//  let b = Number(input[1].value)
//  result.textContent = a+b;
// }
// btn.addEventListener('click',plus)


//--------------------------------------------------------------------------------------------

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// class Counter {
//     constructor(onChange) {
//       this.value = 0;
//       this.onChange = onChange;
//     }
    
//     get increment(){
//       this.onChange(this.value += 1);
//     }
    
//     get decrement(){
//       this.onChange(this.value -= 1);
//     }
//   }
  
//   const value = document.querySelector('.value');
  
//   const counter = new Counter((res) => value.innerHTML = res);
  
//   const onClickHandler = ({target}) => target.dataset.action === 'add'? counter.increment : counter.decrement;
  
//   document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', onClickHandler));

// let button = document.querySelectorAll('button');
// let a = button[1]
// let b = button[0]

// let span = document.querySelector('span');


// function plus(){
//  span.textContent++
// }
// a.addEventListener('click',plus)

// function minus(){
//     span.textContent--
// }
// b.addEventListener('click',minus)
//----------------------------------------------------------------------------------------------------------
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/


// const result = document.querySelector('.result');

// const getValue = (form) => {
//   const inputs = form.querySelectorAll('input');
//   const item = [...inputs].find(({checked}) => checked);
//   return item ? item.value : null;
// }

// const onSubmitHandler = (evt) => {
//   evt.preventDefault();
//   const value = getValue(evt.target);
//   const text = value ? `Result: ${value.toUpperCase()}` : `You chose nothing!`;
//   return result.innerHTML = text;
// }


// document.querySelector('.question-form').addEventListener('submit', onSubmitHandler);

// const form = document.querySelector('.question-form');
// const input = form.querySelectorAll('input')
// const result = document.querySelector('.result')

// function wordF(event){
//     event.preventDefault();
//     let psevdomass=Array.from(input);
//     let perebor=psevdomass.forEach(el=>{el.checked?result.textContent = `Result:${el.value.toUpperCase()}` : null})
//     result.style.color='aqua'
//     result.style.fontSize='40px'
// } form.addEventListener('submit',wordF)

//-----------------------------------------------------------------------------------------------------------------

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/


const ul = document.querySelector('ul');
console.log(ul);
