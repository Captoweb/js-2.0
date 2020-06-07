//function one() {
//    console.log('work');
//}
//
//one(); //вызываем функцию


let f1 = document.querySelector('.f-1'); // кнопка

function one() {
    console.log('work');
}

//f1.onclick = one; //вызываем функцию ПО ИМЕНИ без скобок

f1.onclick = function() {
    console.log('Anonim function'); // анонимная функция, её можно вызвать один раз
}

f1.onclick = () => {
    console.log('strelka function'); // стрелочная функция
}

console.log(1 + one());
console.log(one()); //undefined

function two() {
    console.log('work 222');
    return 54;
}
console.log(6 + two()); 


let a = 8;
let b = 9;

function multi() { 
   return a * b;
    // после return НЕ будет выполняться код
}

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2); 


function multi2(x, y) {
    return x * y;
}

console.log(multi2(4, 5));
console.log(multi2(20, 5)); 
console.log(multi2(20, a)); 


function multi3(x = 5, y = 4) {
    return x * y;
}

console.log(multi3()); 

document.querySelector('.f-2').onclick = function(){
    console.log('+++++++++++'); 
}

// стрелочная функция
document.querySelector('.f-2').onclick = () => {
    console.log('>>>>>>>>'); 
}


function (a, b) {
    
}

// стрелочная функция с параметрами
(a, b) => {
    
}

function (a) {
    
}

a => {
    
}


function (a) {
  return 56 * a;  
}

(a) => 'Hello' * a;
    
