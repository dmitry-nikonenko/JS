'use strict'


// setTimeout(function(){console.log("second")},2000)
// console.log('third');
// function show(){console.log('first');}
// setTimeout(show,3000)

//---------------------------------------------------------------------------------------------------
// let image = document.querySelector('img');

// // setInterval(function () {
// //   image.setAttribute('src','http://lorempixel.com/400/400/');
// // }, 1000);

// function loop(){image.setAttribute('src','http://lorempixel.com/400/400/')}
// let show = setInterval(loop,2000)
// function stop() {
//     clearInterval(show)
// }
// image.addEventListener('click',stop)

//-----------------------------------------------------------------------------------------------------
// let date = Date.now()
// let date1 = new Date()

// console.log(date)
// console.log(date1.getDate(2019))

//-----------------------------------------------------------------------------------------------------
// let prizes = Math.floor(Math.random() * 2);

// function shooter(arrow, headShot, fail) {
//     alert('ТЫ меня убил! БРААААТТТТТ!!!!!');
//     setTimeout(function () {
//         Math.random() > .5 ? headShot() : fail(alert('Мазила'))
//     }, 1000)
// }

// function win() {
//     alert('Ну ТЫ и ПИДОР!!!!')
// };

// function prize() {
//     if (prizes <= 1) {
//         alert('Забирай мою жену')
//     } else {
//         alert('Трахни МУРЧИКА')
//     }
// }

// shooter({}, function () {
//     alert('NOOOOO');
//      win();
//     prize();
// })


//----------------------------------------------------------------------------------------------------------------

// let prize = Math.floor(Math.random()*2);
// let prize3 = Math.floor(Math.random(1)*2);
// console.log(prize);

// function shooter(arrow){
//     alert('НЕ СТРЕЛЯЙ БРАТТТТТ');


//     const promise = new Promise((resolve,reject) =>{
//         setTimeout(function(){
//             Math.random() > .5 ? resolve(alert('ТЫ убил меня.... мне становится холодно....кхе...кхеее')) : reject(alert('Зря ты промазал пидрило!!!!!'))
            
//         },400)
        
//     })
//    return promise;
// }




// function prizes (){
//    if(prize === 1){
//      alert('жизнь потеряла всякий смысл... забери мою жену..... и позаботся  о моих детях......');
//    } else if(prize !== 1) {
//        alert('я тебьЯ сейчас в очко трахну!!!!!!');
       
//    }
// }

// function prizes1 (){
//     if(prize3 === 1){
//       alert('ssssssssssssss');
//     } else if(prize3 === 2) {
//         alert('aaaaaaaaaaaaaaaa');
        
//     }
//  }

// function win(){
//     alert('Бля')
// }
// shooter({})
//       .then(head => console.log('head'))
//       .then(prizes)
//       .then(win)
//       .then(prizes1)
//       .catch(prizes1)