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


//-----------------------------------Собрание в один----------------------------------------------------------

// const bmw = {
//     wheels: 2,
//     doors: 4,
//     ego: true
// }

// const showObj = Object.assign(cars, bmw);
// console.log(showObj)

//--------------------------------------------Распиление------------------------------------------------------------------

// const c = {...cars, ...bmw}
// console.log(c)



// const{wheels,doors,ego}= bmw;
// console.log(wheels)