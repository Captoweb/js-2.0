let arr = ['Ivan', 'Petrov', 37];

console.log(arr[0]); // обращение к первому элементу массива 

console.log(arr[4]); // обращение к несуществующему элементу массива - undefined

console.log(arr); // выводит весь массив

console.log(arr.length); // выводит длинну массива 


//------------------------------------

// Метод push добавляет в конец массива 

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(a.length); // выводит длинну массива 

//a.push(10); // добавляет в конец массива 10

console.log(a.push(10));
console.log(a.push(11, 44, 55, 66)); // можно добавить сразу несколько чисел в массив
console.log(a);

b.push('j', 'w');
console.log(b); 


b.pop(); // удаляет последний элемент массива
console.log(b); 

// Удаление элемента внутри массива

delete a[3];
console.log(a); // остаются empty - как бы дырки в массиве


//Метод splice()
//Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

//array.splice(start, deleteCount[, item1[, item2[, ...]]])
// start - Индекс, по которому начинает изменять массив. Если больше длины массива, реальный индекс будет установлен на длину массива. Если отрицателен, указывает индекс элемента с конца.

a.splice(3, 3); // удаляет три элемента после цифры 3
console.log(a);

a.splice(3, 3, 'hi');  //может добавить элемент взамен удаленному
console.log(a);



// Task 2 (это как образец)
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

// шаблон вывода

let ar2 = ['str', 'str2', 10, 20, true, false];

function f2() {
    
    let out = '';
    for (let i = 0; i < ar2.length; i++) {
        out += ar2[i] + ' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;

//---------------------------------------
// Последний элемент массива

let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {
    let output = document.querySelector('.out-9');
    output.innerHTML = ar9[ar9.length - 1]; // Последний элемент массива
}

document.querySelector('.b-9').onclick = f9;


// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

let ar3 = [1, 2, 3, 4]; // переменную обьявляем здесь!!!!

function f3() {
    let out = '';
    for (i = 0; i < ar3.length; i++) {
        // out += ar3[i];
    }
    document.querySelector('.out-3').innerHTML = ar3.length;
}

document.querySelector('.b-3').onclick = f3;




