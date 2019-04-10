'use strict'

// const num =[1,2,3,4,5];
// const newArr = num.map(el=>el*2);
// console.log(newArr)
//-----------------------------------------------------------------------
// const num =[1,2,3,4,5];
// console.log(num.forEach(el=>console.log(el)))
//---------------------------------------------------------------------
// const num =[1,2,3,4,5];
// const map = num.map(function(el,ind,arr){
// return el*2
// }) 
// console.log(map)
//----------------------------------------------------------------------

// const users = [
//     { name: "Mango", daysInactive: 10, isActive: true },
//     { name: "Poly", daysInactive: 5, isActive: false },
//     { name: "Ajax", daysInactive: 12, isActive: true }
//   ];

//   const showUser = users.map(el => ({...el, isActive: el.daysInactive<7}))
//   console.log(showUser)
//----------------------------------------------------------

// const num =[1,2,3,4,5];
// const filter = num.filter(el => el>3)
// console.log(filter)
//-------------------------------------------------------------

// const users = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true },
//     { name: "Chelsey", isActive: false }
//   ];

//   const find = users.filter(el => el.isActive).map(el=>el.name)
//   console.log(find)
//--------------------------------------------------------------------- 

// const num =[1,2,3,4,5];
// const filter = num.find(el => el>3)
// console.log(filter)

// const users = [
//     { id: "000", name: "Mango", isActive: true },
//     { id: "001", name: "Poly", isActive: false },
//     { id: "002", name: "Ajax", isActive: true },
//     { id: "003", name: "Chelsey", isActive: false }
//   ];
// // const find = users.find(el=>el.id === "003")
// // console.log(find)

// function find(arr,copyid){ let newArr = arr.find(el=>el.id === copyid)
//     return newArr}

// console.log(find(users,"001"))

//--------------------------------------------------------------------------------

// function soms(el){return el>1}
// console.log([1,2,3,4,5].some(soms))

//-----------------------------------------------------------------------------

// const num =[1,2,3,4,5];

// const show = num.reduce((acc,el)=>acc+=el)
// console.log(show)

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];

// const show = tweets.reduce((acc,el)=>el.likes+acc)
// // console.log(show)