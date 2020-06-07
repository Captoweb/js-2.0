// Task     11
//     Дан select s-111 и s-112, каждый из которых содержит 1 и 0.  Дан select s-113, который содержит две операции - && и || . Дана кнопка b-11, при нажатии на которую срабатывает функция f11. Функция выводит в out-11 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&,  нужно вывести результат операции 1&&1 т.е. 1 или 0.

const out11 = document.querySelector('.out-11');
    function f11() {
      const s111 = +document.querySelector('.s-111').value;
      const s112 = +document.querySelector('.s-112').value;
      const select113 = document.querySelector('.s-113').value;
      
    if (s111 == 1 && s112 == 1) {
        if (select113 == '&&') {
            out11.innerHTML = '1 и 1';
        } else {
            out11.innerHTML = '1 или 1';
        }
    }
    else if (s111 == 0 && s112 == 0) {
            if (select113 == '&&') {
                out11.innerHTML = '0 и 0';
            } else {
                out11.innerHTML = '0 или 0';
            }
        }
    else {
        if (select113 == '&&') {
            out11.innerHTML = '1 и 0';
        } else {
            out11.innerHTML = '1 или 0';
        }
    }
  }
document.querySelector('.b-11').onclick = f11;