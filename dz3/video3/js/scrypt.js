let a = 6;

// if( a < 9) {
//     console.log('Yes');
// }
// else {
//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

// () => стрелочная функция - она как безымянная
button.onclick = () => {

    let num = +input.value;
    
    if (num >= 16 && num < 60) {
        console.log('welcome!!!');
    } else if (num > 60) {
        console.log('Ты точно сюда?');
    } else {
        console.log('Маловат!');
    }


    switch (num) {
        case 15:
            console.log('Еще год подожди!');
            break;
        case 16:
            console.log('Ура можно!');
            break;
        default:
            console.log('oook');
    }
}

let b = 3;

console.log(b > 3 && b < 7);

console.log(b == 3 || b == 7);