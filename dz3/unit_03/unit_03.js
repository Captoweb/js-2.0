// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

function f1() {
    if (input1.value == 4) {
        output1.innerHTML = true;
    } else {
        output1.innerHTML = false;
    }
}

document.querySelector('.b-1').onclick = f1;
let input1 = document.querySelector('.i-1');
let output1 = document.querySelector('.out-1');


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;

function f2() {
    if (a21 > a22) {
        output2.innerHTML = a21;
    } else {
        output2.innerHTML = a22;
    }
}

document.querySelector('.b-2').onclick = f2;
let input2 = document.querySelector('.i-2');
let output2 = document.querySelector('.out-2');


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

function f3() {
    if ((+input31.value) > (+input32.value)) {
        output3.innerHTML = +input31.value;
    } else {
        output3.innerHTML = +input32.value;
    }
}

let input31 = document.querySelector('.i-31');
let input32 = document.querySelector('.i-32');
let output3 = document.querySelector('.out-3')
document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

function f4() {
    if (2020 - input4.value >= 18) {
        output4.innerHTML = 1;
    } else {
        output4.innerHTML = 0;
    }
}

let input4 = document.querySelector('.i-4');
let output4 = document.querySelector('.out-4')
document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

function f5() {
    if (input5.value < 0) {
        output5.innerHTML = 'm';
    } else if (input5.value == 0) {
        output5.innerHTML = 0;
    } else if (input5.value > 0) {
        output5.innerHTML = 1;
    }
}

let input5 = document.querySelector('.i-5');
let output5 = document.querySelector('.out-5')
document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

function f6() {
    if (+input6.value % 2 == 0) {
        output6.innerHTML = 'even';
    } else {
        output6.innerHTML = 'odd';
    }
}
let input6 = document.querySelector('.i-6');
let output6 = document.querySelector('.out-6');
document.querySelector('.b-6').onclick = f6;


// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

function f7() {
    let res = (+input71.value) ** (+input72.value);
    output7.innerHTML = res;
}

let input71 = document.querySelector('.i-71');
let input72 = document.querySelector('.i-72');
let output7 = document.querySelector('.out-7');
document.querySelector('.b-7').onclick = f7;


// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

function f8() {

    let num = +input8.value;
    switch (num) {
        case 1:
            output8.innerHTML = 'one';
            break;
        case 2:
            output8.innerHTML = 'two';
            break;
        case 3:
            output8.innerHTML = 'three';
            break;

    }
}

let input8 = document.querySelector('.s-8');
let output8 = document.querySelector('.out-8');
document.querySelector('.b-8').onclick = f8;


// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

function f9() {

    let x = +input9.value;
    if (x >= 1 && x <= 32) {
        output9.innerHTML = 1;
    } else if (x >= 33 && x <= 43) {
        output9.innerHTML = 2;
    } else if (x >= 44 && x <= 64) {
        output9.innerHTML = 3;
    } else {
        output9.innerHTML = 0;
    }
}

let input9 = document.querySelector('.i-9');
let output9 = document.querySelector('.out-9');
document.querySelector('.b-9').onclick = f9;


// Task 10
//     Дан input i-101 и input-102, type=number.  Дан select s-103, который содержит четыре операции - +, -, *, / . Дана кнопка b-10, при нажатии на которую срабатывает функция f10. Функция выводит в out-10 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат 1+13 т.е. 14.

function f10() {

    let inp_101 = +document.querySelector('.i-101').value;
    let inp_102 = +document.querySelector('.i-102').value;
    let sel_103 = document.querySelector('.s-103').value;

    if (sel_103 == '+') {
        out_10.innerHTML = inp_101 + inp_102;
    }
    else if (sel_103 == '-') {
        out_10.innerHTML = inp_101 - inp_102;
    }
    else if (sel_103 == '*') {
        out_10.innerHTML = inp_101 * inp_102;
    }
    else if (sel_103 == '/') {
        out_10.innerHTML = inp_101 / inp_102;
    }

}

let out_10 = document.querySelector('.out-10');
document.querySelector('.b-10').onclick = f10;


// Task     11
//     Дан select s-111 и s-112, каждый из которых содержит 1 и 0.  Дан select s-113, который содержит две операции - && и || . Дана кнопка b-11, при нажатии на которую срабатывает функция f11. Функция выводит в out-11 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&,  нужно вывести результат операции 1&&1 т.е. 1 или 0.

function f11() {

    let sel_111 = +document.querySelector('.s-111').value;
    let sel_112 = +document.querySelector('.s-112').value;
    let sel_113 = document.querySelector('.s-113').value;

    if (sel_111 == 1 && sel_112 == 1) {

        if (sel_113 == '&&') {
            out_11.innerHTML = 1;
        } else if (sel_113 == '||') {
            out_11.innerHTML = 1;
        }
    } else if (sel_111 == 0 && sel_112 == 0) {

        if (sel_113 == '&&') {
            out_11.innerHTML = 0;
        } else if (sel_113 == '||') {
            out_11.innerHTML = 0;
        }
    } else if (sel_111 == 1 && sel_112 == 0) {

        if (sel_113 == '&&') {
            out_11.innerHTML = 0;
        } else if (sel_113 == '||') {
            out_11.innerHTML = 1;
        }
    } else if (sel_111 == 0 && sel_112 == 1) {

        if (sel_113 == '&&') {
            out_11.innerHTML = 0;
        } else if (sel_113 == '||') {
            out_11.innerHTML = 1;
        }
    }
}

let out_11 = document.querySelector('.out-11');
document.querySelector('.b-11').onclick = f11;