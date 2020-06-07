// декремент
for(g = 1; g < 6; g++) {
    for(let i = 5; i > 0; i--) {
        console.log(i); // выводит в обратном порядке: 5 4 3 2 1 
        document.querySelector('.out').innerHTML += i;
    }
    document.querySelector('.out').innerHTML += '<br>';
}
    



let out = document.querySelector('.out-2');
    for(i = 1; i < 6; i++) {
        
        for(k = i; k < 6; k++) { 
            out.innerHTML += '*'; 
            console.log(k);
        } 
        
        out.innerHTML += '<br>';
    }

//рисует

//*****
//****
//***
//**
//* 


//выведение переменной за пределы цикла
let out = '';
for (let i = 0; i < 6; i++ ){
        out += i;
    }    
    elem.innerHTML = out;


let out = ''; //собираем все в пустую строку
for(let i = 0; i < 10; i++) {

    out += i + ' '; // добавляем в переменную 

}
document.querySelector('#out').innerHTML = out; // выводим сюда из цикла


