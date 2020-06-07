let out = document.querySelector('.out');
console.log(out);

//for(let i = 0; i < 5; i++) {
//    for(let k = 0; k < 10; k++) {
//        out.innerHTML += '*'; выводит звездочки
//    }
//    out.innerHTML +=' '; // выводит пробелы
//} 

//for(let i = 0; i < 5; i++) {
//    for(let k = 0; k < 10; k++) {
//        out.innerHTML += k; 
//    }
//    out.innerHTML +=' '; 
//} 

//for(let i = 0; i < 5; i++) {
//    for(let k = 0; k < 10; k++) {
//        out.innerHTML += k; 
//    }
//    out.innerHTML +='<br>'; // выводит столбиком
//} 


for(let i = 1; i < 10; i++) {
    //out.innerHTML += '3*'+i+'='+(i*3) + '<br>';
     
    for(let k = 1; k < 10; k++) {
        out.innerHTML += `${i}*${k}=${i*k}<br>`;  
    }
    out.innerHTML += '<hr>'; 
}


//Шаблонные строки

// `строка текста`

// `строка текста 1
//  строка текста 2`

// `строка текста ${выражение} строка текста`

// tag `строка текста ${выражение} строка текста`

// (${выражение})

var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.');
// "Fifteen is 15 and not 20."

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// "Fifteen is 15 and not 20."


  let out = '';
    for (let i = 0; i < 6; i++ ){
        out += i;
    }    
    elem.innerHTML = out;


    // Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

function t7(a) {
    //return `rgb(${t7(0,255)}....допишите сами 
    // "rgb(255,99,71)";
    let x = Math.floor( Math.random() * (255 + 1) + 0 ); 

    let y = Math.floor( Math.random() * (255 + 1) + 0 ); 

    let z = Math.floor( Math.random() * (255 + 1) + 0 ); 
    console.log(x, y, z);

    
    let color = (`rgb(${x},${y},${z})`);
    console.log(color);
    return  color;
}

document.querySelector('.b-7').onclick = function () {
    
    document.querySelector('.out-7').style.background = t7();
}
