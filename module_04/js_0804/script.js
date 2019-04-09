    'use strict'


    // const about = {
    //     name: 'Maks',
    //     age:3,
    //     lastName: 'Norets',
    //     isActive: true}

    // about.name = 'dima';
    // about.height = 191;

    // // delete about.name
    // const shoeUser = (max, num) => about[max] >= num? console.log('ok'): console.log('ne ok');
    // shoeUser('height', 100)

    // console.log(about.height, about.age);
    // console.log(about['name'])



    //-----------------------------------------------------------------------------------------------------------



    // let name = 'Maks';
    // let age = 3;
    // let lastName ='Norets';
    // let isActive = true;

    // const about = {
    //     name,
    //     age,
    //     lastName,
    //     isActive,
    //     show(){return about.age + 10;}
    // }

    // console.log(about)
    // console.log(about.show());


    //------------------------------------------------------------------------------------------------


    // const key = 'person';
    // const getKey = () => 'age';

    // const object = {
    //   [key]: 'Mango',
    //   [getKey()]: 2
    // };

    // console.log(object); // {person: 'Mango', age: 2}

    //--------------------------------------------------------------------------------------------


    // const cars = {
    //     color: 'red',
    //     wheels: 4,
    //     doors: 5,
    //     music: true

    // }

    // // for(let key in cars){
    // //     console.log(cars[key]);
    // // }

    // const keys = Object.keys(cars);
    // console.log(keys);

    // const values = Object.values(cars);
    // console.log(values);

    // const entries = Object.entries(cars);
    // console.log(entries);
     
    // for(let key of entries){
    //     console.log(key);
    //     let newKey = key[0];
    //     let newWalues = key[1]
    // } console.log(`${newKey}==${newWalues}`)


//---------------------------------------------------------------------------------------------

// const bmw = {
//     wheels: 2,
//     doors: 4,
//     ego: true
// }

// const showObj = Object.assign(cars, bmw);
// console.log(showObj)

//--------------------------------------------------------------------------------------------------------------

// const c = {...cars, ...bmw}
// console.log(c)



// const{wheels,doors,ego}= bmw;
// console.log(wheels)

// ----------------------------------------------------------------------------------

// function fn(){return`hello ${this.name}`}
// const itsMe ={name:"dima"}
// itsMe.showMe = fn;
// console.log(itsMe.showMe())



                                         //----------------------------
// const newFn = () => console.log(this);               
// newFn()

//---------------------------------------------------------------------------------------------------
// const itsMe ={
//     name:"dima",
//     fn(){console.log(this)}
// }
// itsMe.fn();

// const fnD = function(callback){


//     callback()
// }
// fnD(itsMe.fn)


//----------------------------------------------------------------------------------------------------

// function DOUBLE(name,age,height){
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.plus= function(el) { return this.age = this.age + el;}
//     this.minus =function(){this.height-=1; console.log(this.height)
//     }
// }

// const double = new DOUBLE ("maksim", 2 , 195);
// double.plus(10);
// double.minus();
// console.log(double);

// const triple = new DOUBLE ('pasha', 22,210);
// triple.minus();
// triple.plus(30);


// console.log(triple)

//--------------------------------------------------------------------------------------------------------


// function SHOP(name,sell=0, change=10){
//     this.name = name;
//     this.sell = sell;
//     this.change = change;
//     this.plus = function(product) {
        
//         this.sell += 1;
//         this.change -=1;
//         return `----->${product}<-------`;
//     }
//       this.alarm =function(){if(this.change < 6){alert("AAAAlarm")}}

// }

// const margo = new SHOP('Margo')
// margo.plus('iron');
// margo.plus('tv');
// margo.plus('tv');
// margo.plus('tv');
// margo.plus('tv');
// margo.plus('tv');
// margo.plus('tv');
// margo.plus('tv');

// margo.alarm()

//  console.log(margo)