
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


const setYourName = function () {
  span.textContent = input.value;
  if (!input.value) {
    span.textContent = "незнакомец";
  }
};

input.addEventListener('input',  function() {
    setYourName(input.value);
 });

