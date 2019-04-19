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

// let sub=document.querySelector('button[data-action = "sub"]')
// let add=document.querySelector('button[data-action = "add"]')
// let result=document.querySelector('.value')

// class Counter{
//   constructor(onChange){
//     this.value = 0;
//     this.onChange=onChange;
//   } 
//   get increment(){this.value++; this.onChange(this.value)}
//   get decrement(){this.value--; this.onChange(this.value)}
// }

// function onChange(value) {
//  result.textContent=value;
// }
// let counter = new Counter(onChange)

// sub.addEventListener('click', ()=>counter.decrement)
// add.addEventListener('click', ()=>counter.increment)


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


// let images = document.querySelector('.images');
// function show(event){
//   alert(event.target.src)
// }
// images.addEventListener('click',show);

//----------------------------------------------------------------------------------------------------------------

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// let ul = document.querySelector('.list');
// function removeLi (dima){
//   if(dima.target.nodeName==="BUTTON"){
//     dima.target.parentNode.remove()
//   }
// }
// ul.addEventListener('click',removeLi);


// const onClickHandler = ({target}) => target.dataset.action === 'delete' ? target.parentNode.remove() : null;

// document.querySelector('.list').addEventListener('click', onClickHandler)

//---------------------------------------------------------------------------------------------------------------

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// let div = document.querySelector('.input-list');
// function textAlarm (dima){
//   if(dima.target.value.length !== Number(dima.target.getAttribute('data-length'))){dima.target.classList.add('invalid')}else{dima.target.classList.add('valid')}}
// div.addEventListener('focusout', textAlarm);

//--------------------------------------------------------------------------------------------------------------

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const onFocusInHandler = (evt) => document.querySelector('.message').innerHTML = "Input is in focus!";
// const onFocusOutHadler = (evt) => document.querySelector('.message').innerHTML = "";
// const getInputValue = ({target}) => document.querySelector('.input-value').innerHTML = `Current input value: ${target.value}`;

// document.querySelector('.input').addEventListener('focusin', onFocusInHandler);
// document.querySelector('.input').addEventListener('focusout', onFocusOutHadler);
// document.querySelector('.input').addEventListener('input', getInputValue);


// let message = document.querySelector('.message');
// let input = document.querySelector('.input');
// let inputValue = document.querySelector('.input-value');

// function addOn(){
//   message.innerHTML='Input is in focus!'
// }
// function addOut(){
//   inputValue.innerHTML= `Current input value: ${input.value}` 
// }


// input.addEventListener('focusin', addOn);
// input.addEventListener('input', addOut);

//----------------------------------------------------------------------------------------------------------------

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/


// const onModalHandler = (evt) => {
//   evt.preventDefault();
//   const {dataset, classList} = evt.target;
//   if (dataset.action === 'open-modal') {
//     return document.querySelector('.js-modal-backdrop').classList.remove('modal-hidden');
//   } 
//   if(dataset.action === 'close-modal' || classList.contains('js-modal-backdrop')) {
//     return evt.target.closest('.js-modal-backdrop').classList.add('modal-hidden');
//   }
// }

// document.addEventListener('click', onModalHandler);

// let btn = document.querySelector('.btn');
// let js = document.querySelector('.js-modal-backdrop');
// let close = document.querySelector('.close-btn');
// let modal = document.querySelector('.modal');

// function remove(){
//   js.classList.remove('modal-hidden')}
//   btn.addEventListener('click', remove);
 
//   function add(ev){
    // if(ev.target ===modal||ev.target===close)
//     js.classList.add('modal-hidden') 
//   }
//   close.addEventListener('click', add); 
//   modal.addEventListener('click', add);

//---------------------------------------------------------------------------------------------------------------

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

// const setActiveLink = (nextActive) => {
//   const currentActive = document.querySelector('a.active');
//   if (currentActive) {
//     currentActive.classList.remove('active')
//   }
//   return nextActive.classList.add('active');
//  }

// const onClickHandler = (evt) => {
//   evt.preventDefault();
//   if (evt.target.nodeName !== 'A') return;
//   return setActiveLink(evt.target);
// }

// document.querySelector('.js-menu').addEventListener('click', onClickHandler)


// let li = document.querySelectorAll('.menu-item > a');
// let ul = document.querySelector('.menu');

// function activate(ev){if(ev.target.nodeName === 'A'){
//   li.forEach(el => el.classList.remove('active'));
//   ev.target.classList.add('active')}
// }
// ul.addEventListener('click',activate)







