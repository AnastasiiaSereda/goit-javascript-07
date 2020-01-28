// const input = document.querySelector('#validation-input');

// input.addEventListener('blur', lengthCheck);

// function lengthCheck() {

//     if (input.value.length != input.dataset.length) {
//         input.classList.add('invalid')
//     } else if (input.classList.contains('invalid')) {
//         input.classList.remove('invalid');
//     }

//     input.classList.add('valid')
// }



const input = document.querySelector('#validation-input');

input.addEventListener('blur', function() {
  insertedText(input.value.length);
});

const insertedText = function (value) {
  const number = parseInt(input.dataset.length);

  if (value === number) {
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};