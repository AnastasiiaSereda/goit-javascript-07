const counter = document.querySelector('#value');

const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

let counterValue = 0;


const incrementValue = function() {
    counterValue += 1;
    counter.textContent = counterValue;

}
increment.addEventListener('click', incrementValue );


const decrementValue = function() {
    counterValue -= 1;
    counter.textContent = counterValue;

}
decrement.addEventListener('click', decrementValue );
