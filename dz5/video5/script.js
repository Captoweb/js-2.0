// for (старт, работаем пока верно, счетчик) {
//    
// } цикл выполнился
// работаем дальше
// можно получить бесконечный цикл, если не верно прописать условие

//for (let i = 0; i < 5; i++) {
//   console.log(i);  
//}
//
//for (let i = 0; i < 5; i++) {
//    if(i = 4) break; // выход из цикла
//    
//}

let div = document.querySelectorAll('.one');  // получение элементов по КЛАССУ
console.log(div);
//div.style.background = 'tomato'; // окрашивает div

for (let i = 0; i < div.length; i = i + 1) {
    console.log(div[i]);
    div[i].style.background = 'tomato'; // окрашивает все элементы массива (div)
    div[i].onclick = two;
} 

function two() {
    console.log('work!!!');
}

let b = document.getElementsByClassName('one'); // получение элементов по КЛАССУ
let c = document.getElementsByTagName('one'); // получение элементов по ТЕГУ
console.log(b);

for(let i = 0; i < b.length; i++) {
    b[i].style.border = "1px solid black"; 
}


document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for(let i = 0; i < r.length; i++) {
        if(r[i].checked) {
            console.log(r[i].value); // выводит value элемента
        }
    }
}


let out = ''; //собираем все в пустую строку
for(let i = 0; i < 10; i++) {
    
    if(i == 4) continue; //пропускаем где 4
    out += i + ' '; // добавляем в переменную 
    if(i == 6) break; // останавливает цикл на 6
}
document.querySelector('#out').innerHTML = out; // выводим сюда из цикла


// декремент
for(let i = 5; i > 0; i--) {
    console.log(i); // выводит в обратном порядке: 5 4 3 2 1 
    document.querySelector('.out').innerHTML += i;
}

// Пример, вывести числа от одного до 5.
for (let i = 0; i < 6; i++ ){
        elem.innerHTML += i;
    }

// Как правильно делать вывод в цикле? Так:

let out = '';  //собираем все в пустую строку
 for (let i = 0; i < 6; i++ ) {
        out += i;  // добавляем в переменную 
    }    
    elem.innerHTML = out; // выводим сюда из цикла

//  Здесь, вы накапливаем данные в строчную переменную. А вывод у нас - один. 
//  Запоминаем прием, и везде где вывод в цикле - используем.  


let out = ''; //собираем все в пустую строку
for(let i = 0; i < 10; i++) {

    out += i + ' '; // добавляем в переменную 

}
document.querySelector('#out').innerHTML = out; // выводим сюда из цикла


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, 
//и две звездочки если четное). Задача решается с помощью цикла.
function t5() {
    let out1 = '';
    let out2 = '';
    let output = document.querySelector('.out-5');
    
    for(let i = 1; i <= 17; i++) { 
         if (i % 2 == 0 ) {
             out1 += i + '_*';
            
         } 
        else {
            out2 += i + '_**';
         
        }
    }
     output.innerHTML = out1;
     output.innerHTML = out2;
}

document.querySelector('.b-5').onclick = t5;



function t5() {
    let out1 = ''; //тут не получилось переделать!
    let out2 = '';
    let output = document.querySelector('.out-5');
    
    for(let i = 1; i <= 17; i++) { 
         if (i % 2 == 0 ) {
             
             output.innerHTML += i + '_**';; 
         } 
        else if (i % 2 != 0 ){
         
             output.innerHTML += i + '_*';
        }
    }
    
}


//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i

function t15() {
 
    let output = document.querySelector('.out-15');  
    let out = ''; 
        for(let i = 0; i <= 10; i++) { 
        out +=  (10-i) + ' '+ i + ' ';  
    }
    output.innerHTML = out;
}

document.querySelector('.b-15').onclick = t15;


//правильное решение
function t5() {

    let output = document.querySelector('.out-5');
    let out = '';
    for(let i = 1; i <= 17; i++) { 
         
        if(i % 2 != 0) {
             out += i + '_*'; 
        }
        else{
              out += i + '_**'; 
        }     
    }
     output.innerHTML = out;
}

document.querySelector('.b-5').onclick = t5;
