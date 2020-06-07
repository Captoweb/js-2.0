console.log('hello'); // строки берем в кавычки
console.log('world');
console.log('333');
console.log(334);
console.log('Hello ' + 'World'); // конкатенация
console.log('Hello' + ' ' + 'World'); // конкатенация
//alert('hello allert'); 

document.getElementById('out').innerHTML = 'Hello'; //перезаписали
document.getElementById('out').innerHTML = 2020; //перезаписали
document.getElementById('out').innerHTML = '<b>2020</b>'; //перезаписали

document.querySelector('.header').innerHTML = 5;
document.querySelector('#one').innerHTML = 'id';

let a = document.querySelector('#one'); // Врутрь a получил параграф 
let c; //объявление
c = document.querySelector('.header'); // присвоение

a.innerHTML = 'new id'; // new - зарезервированное слово!
c.innerHTML = 777;