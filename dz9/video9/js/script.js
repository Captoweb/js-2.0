const one = document.querySelector('.one');

one.style.width = '150px'; // задать ширину

one.style.paddingBottom = '35px'; // добавить паддинг

//console.log(one.style); 

//one.classList.add('two'); // добавить класс
one.classList.add('two', 'three'); // добавить 2 класса
one.classList.remove('three'); // удалить класс


const toggle = document.querySelector('.toggle'); 

toggle.onclick = function() {
    this.classList.toggle('three');
}

// Атрибуты data

//console.log(one.getAttribute('data')); // выводит атрибут в консоль
//console.log(document.querySelector('link').getAttribute('href')); // выводит ссылку в консоль
//console.log(document.querySelectorAll('link')[1].getAttribute('href')); // выводит ПЕРВУЮ ссылку

one.setAttribute('data-num', 6); // задает атрибут

// Сохраняем состояние элемента
let gas = document.querySelectorAll('.gas');

for( let i =  0; i < gas.length; i++ ) {
    gas[i].onclick = function() {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}

//--------------------------------

let a = document.createElement('div'); // создает див
a.innerHTML = 'Hello'; // добавляет в див текст
a.classList.add('one'); // добавляет класс диву

a.onclick = function() { // добавляет событие по клику на див
    alert('hello');
}

document.querySelector('.test').appendChild(a); // выводит этот див на страницу
// element.appendChild(child);  добавляет узел в конец списка дочерних элементов 
// указанного родительского узла.
console.log(a);

// Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель

//-----------------------------------
    var x = document.getElementById("myDIV");

    if (x.classList.contains("mystyle")) {
    x.classList.remove("anotherClass");
    } else {
    alert("Could not find it.");
    } 

//----------------------------------------
//  Task 7
// По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. 
// Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks7 = document.querySelectorAll('.out-7');

function f7() {
    //внутри цикла blocks7[i].classList....
    for (let i = 0; i < blocks7.length; i++) {
        blocks7[i].classList.add('bg-7');
    }
}

document.querySelector('.b-7').onclick = f7;

//--------------------------------
var attribute = element.getAttribute(attributeName);


//    attribute - переменная, которой будет присвоено значение attributeName.
//   attributeName - имя атрибута, значение которого необходимо получить.


//  element.setAttribute(name, value);

//  name - имя атрибута (строка).
//  value  - значение атрибута.




