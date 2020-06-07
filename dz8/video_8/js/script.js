for ( let i = 0; i < 6; i++ ) {
    console.log(i);
}


let k = 0;
while ( k < 5 ) {
    k++; 
    console.log( 'k: '+k );
}
// выводит
// k: 1
// k: 2
// k: 3
// k: 4
// k: 5


let n = 0;
while ( n < 5 ) {
    console.log( 'n: '+n );
    n++; 
}
// выводит
// n: 0
// n: 1
// n: 2
// n: 3
// n: 4


// let k = 0;
// while ( k < 5 ) {
//    console.log( 'k: '+k );
//    if( k == 3 ) continue:
//    k++; 
// }
//  выводит БЕСКОНЕЧНЫЙ ЦИКЛ

// let k = 0;
// while ( k < 5 ) {
//    k++; 
//    
//    console.log( 'k: '+k );
//    if( k == 3 ) continue:  
//}
// а так НОРМАЛЬНО

// Найти сумму чисел от 0 до 10 

let sum = 0;
let p = 0;
while (p <= 10) {
    sum = sum + p;
    p++;
}
console.log('sum = '+ sum);


//   Вывести фигуру
// ****
// ****
// ****
// ****

let out = document.querySelector('.out');
p = 0;
let outStr = ''; // накопительная переменная для вывода за пределы цикла

while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        outStr += '*'; // тут она накапливает
        p1++;
    }
    outStr += '<br>';
    p++;
}

out.innerHTML = outStr; // вывод результата за пределами цикла

//------------------------------------

let out2 = document.querySelector('.out2');
p = 0;
let outStr2 = '';
let flag = 3;

while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        if(p1 < flag) {
           outStr2 += '&nbsp';  // или пробел -  &nbsp
        }
        else{
           outStr2 += '*';   
        }
         p1++;
    }
    flag--;
    outStr2 += '<br>';
    p++;
}

out2.innerHTML = outStr2;


//------------------------------------

let out3 = document.querySelector('.out3');
p = 0;
let outStr3 = '';
let flag3 = 3;

while (p < 4) {
    let p1 = 0;
    while (p1 < 4) { 
        if(p1 < flag3) {
           outStr3 += '0';  // или пробел -  &nbsp
        }
        else{
           outStr3 += '*';   
        }
         p1++; 
    }
    flag3--;
    outStr3 += '<br>';
    p++;
} 

out3.innerHTML = outStr3;


//-------------------------

//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


function t1() {
    let k = 0;
    let out = document.querySelector('.out-1');
    let outStr = ''; // накопительная переменная для вывода за пределы цикла

    while ( k < 50) {
        k++;
        console.log(k);
        outStr += k + ' '; // тут она накапливает
    }
    out.innerHTML = outStr; // вывод результата за пределами цикла
}

document.querySelector('.b-1').onclick = t1;


//-------------------------


function t3() {
    
    let out = '';
    for(let i = 25; i > 6; i--) { 
        out += i + ' ';
       // document.querySelector('.out-3').innerHTML += i + ' ';
    }
     document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.b-3').onclick = t3;

//---------------------







