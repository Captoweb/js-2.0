document.querySelector('.btn1').onclick = function () {
    console.log(document.querySelector('#one').value); 
    
    // задать цвет кнопки (элемента)
    document.querySelector('button').style.backgroundColor = 
        document.querySelector('#one').value 
}

// выводит в консоль значение ПОЛЗУНКА
//document.querySelector('#one').oninput = () => {
//    console.log(document.querySelector('#one').value);  
//}

// выводит НА СТРАНИЦУ значение ползунка в span .polz
document.querySelector('#one').oninput = () => {
    document.querySelector('#one').value; 
    let pol = document.querySelector('.polz'); 
    pol.innerHTML = document.querySelector('#one').value;
} 

// манипуляции с  checkbox
document.querySelector('.btn2').onclick = () => {
    console.log(document.querySelector('#i2').value); 
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('нажат');
    }
    else {
        console.log('НЕ нажат');
    }
}
    
    
 // манипуляции с  textarea
document.querySelector('.btn3').onclick = () => {
   let text = document.querySelector('#text3'); 
    console.log(text.value); // получаем содержимое textarea
    text.value = 'one'; // записываем в  содержимое textarea
}
    
  // манипуляции с  form
document.querySelector('.btn4').onclick = (event) => {
   event.preventDefault(); // отменяет перезагрузку страницы    
//   let text2 = document.querySelector('#text4'); 
//    console.log(text2.value); // получаем содержимое textarea
//    text2.value = 'form'; // записываем в  содержимое textarea
    let form = document.querySelector('form');
     console.log(form);
     console.log(form.elements.text4.value); // обращаемся к элементу формы по id
     console.log(form.elements.inp4.value);
} 
      
// манипуляции с  select

document.querySelector('.five').onchange = () => {
   let sel = document.querySelector('.five').value;
   console.log(sel);
}

//document.querySelector('.five').value = 2; // можно задать значение селекта по умолчанию