'use strict';

console.log('Hi');

((num)=>{
    const arr =[1,2,3,4,5];
    return console.log(
     arr.reduce((acc,el)=>acc+el*num, 0))
})(5);

const myFuc = ()=>{
    const getName=()=>'Sergey';
    const getLastName=()=>'Boobs';
    return{getName,getLastName};
}
const myNewFuc=myFuc()
console.log(myNewFuc.getName())
console.log(myNewFuc.getLastName()) 















