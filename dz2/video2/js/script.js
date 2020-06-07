let a = 6;
let b = 'Hello';

console.log(a);

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out'); //сюда выводится из инпута

button.onclick = function() {
    // по нажатию на кнопку
    console.log('working !!!');
    //console.log(inputIn.value);
    let b = +inputIn.value; // + переводит строку в число
    console.log(b + 2); 
    div.innerHTML = b; // выводит
    inputIn.value = ''; // очищает инпут
}

// Функция parseInt() принимает строку в качестве аргумента и возвращает целое число
// в соответствии с указанным основанием системы счисления.

// Функция parseFloat() принимает строку в качестве аргумента 
// и возвращает десятичное число (число с плавающей точкой)