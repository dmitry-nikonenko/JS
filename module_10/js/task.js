'use strict'

// const i = {
//     name: 'Dima',
//     isActive: true,
//     hobby:{run:true,jump:false}

// }

// const jasonAbout = JSON.stringify(i)
// console.log(jasonAbout);
// const parseAbout = JSON.parse(jasonAbout)
// console.log(parseAbout);


// console.log('first');
// let newDate;
// const url= "https://api.myjson.com/bins/k9i31"

// // fetch(url)
// //     //  .then(response=>console.log(response))
// //      .then(response=>response.json())
// //     //  .then(data=> newDate = data)
// //     .then(data=> {let num = document.querySelector('.num') 
// //        num.textContent=data.age})
// //      .catch()
     
// //     //  setTimeout(function(){console.log(newDate)
// //     //  })
// // console.log('second');


// fetch(url)
    
//      .then(response=>{
//          if(response.ok) return response.json()
//          throw new Error('ERRROR')
//      })
//      .then(data=>console.log(data))
//      .catch(err=>console.error('РУКОЖОП СРАНЫЙ',err)
//      )

//----------------------------------------------------------------------------------------
// function getPost(posts){
// return fetch(`https://jsonplaceholder.typicode.com/posts/${posts}`)
// .then(response=>response.json())}
// getPost(5).then(data=>console.log(data))

//-----------------------------------------------------------------------------------------------------

// const vI = {
//     name: 'Василь',
//     number: "05",
//     car: {first:"Жига",second:"Москварик"},
//     alcohol:true
// }
// const url = `https://jsonplaceholder.typicode.com/posts`
// const settings ={
//     method:"POST",
//     body: JSON.stringify(vI),
//     headers:{
//         "Content-type":"application/json" }
// }
// fetch(url,settings)
// .then(res=>res.json())
// .then(data=>console.log(data))


// //-------------------------------------------------------------------
// const putO={title:"ТЫ зачем бояриню обидел, СОБАКА!!!!"}


// const putS={
//     method:"PUT",
//     body: JSON.stringify(putO),
//     headers:{
//         "Content-type":"application/json" }
// }

// // fetch(`https://jsonplaceholder.typicode.com/posts/3`,putS)
// fetch(`https://jsonplaceholder.typicode.com/posts/3`,{method:'DELETE'})
// .then(res=>res.json())
// // .then(data=>console.log(data))
// .then(data=>console.log('Палехче  Уася'))

//-----------------------------------------------------------------------

// localStorage.setItem('login',"vasjaa")
// localStorage.setItem('lg',"05")
// localStorage.setItem('lgs',"052")
// //localStorage.clear()
// localStorage.removeItem('login')

//------------------------------------------------------------------------

// const vII = {
//     name: 'Василь',
//     number: "17 sm",
//     car: {first:"Cadillac",second:"Porshe"},
//     alcohol:false,
//     drugs: true,
//     work : 'porn-actor',

// }

// localStorage.setItem('about', JSON.stringify(vII))
// let res = JSON.parse(localStorage.getItem('about'))
// console.log(res);

// let c = localStorage.getItem("lg")
// console.log(c);

//------------------------------------------------------------------------

// let text =document.querySelector('.num'),
//     input =document.querySelector('.input'),
//     btn =document.querySelector('.btn');

//     function writeLocal(){localStorage.setItem('about', input.value); getLocal }
//     function getLocal(){text.textContent=localStorage.getItem('about',``)}
// getLocal()
// btn.addEventListener('click',writeLocal)

//-------------------------------------------------------------------------


























