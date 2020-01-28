
const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

const changeFontSize = function () {
    let size = input.value;
    span.style.fontSize = `${size}px`;
}

input.addEventListener('input', changeFontSize)


