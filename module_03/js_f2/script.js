'use strict'

// const sum = (...rest) => {
//     console.log(rest)
//    let total = 0;
//    return;
// }
// console.log(sum(1,2,3,4,45))

// // -----------------------------------------------------------

// function newFn(){
//     const newArg = Array.from(arguments)
//     console.log(newArg)

// }
// newFn(1,2,3,4,5,56,67,7,8,89)


// // ------------------------CALLBACK_FUNCTION-----------------------------------

//  function first (callback){console.log(1);callback();} 

//  function second (a,b){console.log(a+b)}


//  first(()=>{return second(2,2)});

//------------------ver.2


// const printMessage = function (callback) {
//     const message = callback();
//     console.log( message );
//   };
  
//   const getMessage = function () {
//     return "Welcome to the jungle!";
//   } 

//------------------------------------------zadacha_conspekt---------- 
// const map = (arr, callback) => {
//     const resultArr = [];
  
//     for(const element of arr) {
//       const result = callback(element);
//       resultArr.push(result);
//     }
  
//     return resultArr;
//   };
  
//   const double = val => val * 2;
  
//   const triple = val => val * 3;
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   const doubledNumbers = map(numbers, double);
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  
//   const tripledNumbers = map(numbers, triple);
//   console.log(tripledNumbers); // [3, 6, 9, 12, 15]
  
//   printMessage(getMessage); // "Welcome to the jungle!"




//-------------------------------------------Замикание____

// function fn(){
//     let counter = 0;
//     function increment(){
//         console.log(counter);
//         counter ++;
//     } return increment;
// }
// const newFn = fn();
// newFn()
// newFn() 
// newFn()
// newFn()
// console.log('----------------------------')
// const newFn2 = fn();
// newFn2()
// newFn2()
// newFn2()
// newFn2()

//--------------------------------------------

 
