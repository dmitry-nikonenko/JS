'use strict'

const assW =[{
    img: 'http://ic.pics.livejournal.com/denisov2008/15449721/322399/322399_900.jpg',
    name:'OSTAP',
    about:'ЖЕНСКИЙ УГОДНИК',
    work:'АЛКАШ',
    done:true
},
{
    img: 'https://pp.userapi.com/c604527/v604527807/193f5/7irNWfIIk9I.jpg?ava=1',
    name:'SEMEN',
    about:'ПІСЮНЯЧИЙ ЗЛОДІЙ',
    work:'АЛКАШ',
    done:true
},
{
    img: 'https://s00.yaplakal.com/pics/pics_original/7/0/6/1516607.jpg',
    name:'STEPAN SEMENOVICH',
    about:'ОБАЯШКА',
    work:'АЛКАШ',
    done:true
},
{
    img: '/img/photo_2019-04-25_16-01-45.jpg',
    name:'АНЖЕЛОЧКА',
    about:'УСЛАДИТЕЛЬНИЦА',
    work:'SEX',
    done:true
}
]


const list = document.querySelector('.list')
const box = document.querySelector('#box').innerHTML.trim()
const comp = Handlebars.compile(box)
const rest = comp(assW)
// assW.forEach(el=>list.insertAdjacentHTML('afterbegin',comp(el)))
list.insertAdjacentHTML('afterbegin',rest)

