'use strict'


// let text = document.getElementById("text");
// let dtext = document.getElementsByClassName('dtext')
// text.style.color="red"
// console.log(text.textContent="Та ну нах")
// console.log(dtext)

// let stext = document.querySelector('div')
// console.log(stext.textContent)

// let list = document.querySelector('.list');
// function fn(el){
//     // let nMass = Array.from(list.children);
//     // let nnMass=[...el].map(el=> el.textContent);
//     let nnnMass=[...el].map(el=> el.style.color='green');
//     // console.log(nMass)
//     // console.log(nnMass)
//     // console.log(nnnMass)
//     return nnnMass;
// }


// console.log(list.children)
// console.log(list.childNodes)
// console.log(list.firstElementChild.textContent = 'first')

// const element = document.createElement('ul');
// const body = document.body;
// body.prepend(element);
// element.innerHTML='<li>list</li>'

// let ccMass = fn(list.children);
// console.log(ccMass);
// let getLi = ccMass.reduce((strr, el)=> strr +`<li>${el}</li>`,'');
// element.innerHTML=getLi;

//-----------------------------------------------------------------------------------------------------

// let textInput=document.querySelector('.texts')
// let Input=document.querySelector('.input')
// let btn=document.querySelector('.btn')


// btn.onclick=function(){
//     textInput.textContent=Input.value;  
//     textInput.style.color ='aqua';
//     textInput.style.fontSize ='100px';
//     textInput.className ='salad'   
// }

let b1 = document.querySelector('.b1')
let b2 = document.querySelector('.b2')
let images = document.querySelectorAll('img')



console.log(images[2])
let i =0;
b1.onclick = function(){
    images[i].className ='';
    i = i+1;
    if(i>=images.length){i=0}
    images[i].className='showed'
  
}


b2.onclick = function(){
    images[i].className='';
    i -=1
    if(i<0){i=images.length -1}
    images[i].className='showed'
  
}

