const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const listOfIngredience = document.querySelector('#ingredients');

const makeList = function(element) {
    const list = document.createElement('li');
    list.textContent = element;
    listOfIngredience.append(list);
}

ingredients.reduce((acc, el) => acc + makeList(el), '');