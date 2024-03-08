let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');
let btn5 = document.querySelector('#btn-5');
let btn6 = document.querySelector('#btn-6');
let div = document.querySelector('#caja');

btn1.addEventListener('click', (event) =>
{
    event.preventDefault();
    div.style.background = "#e53e3e";

})

btn2.addEventListener('click', (event) =>
{
    event.preventDefault();
    div.style.background = "#dd6b20";

})

btn3.addEventListener('click', (event) =>
{
    event.preventDefault();
    div.style.background = "#faf089";

})

btn4.addEventListener('click', (event) =>
{
    event.preventDefault();
    div.style.background = "#48bb78";

})

btn5.addEventListener('click', (event) =>
{
    event.preventDefault();
    div.style.background = "#81e6d9";

})

btn6.addEventListener('click', (event) =>
{
    event.preventDefault();
    div.style.background = "#d53f8c";

})