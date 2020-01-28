
const categories = document.querySelector("#categories");
const childrenItems = categories.children;
console.log(`в списке ${childrenItems.length} категории`);


const item = document.querySelectorAll('.item');
const titleH2 = document.querySelectorAll(".item h2");



const list = document.querySelectorAll(".item ul");
for (let i = 0; i < item.length; i++) {
  const itemH2 = list[i].querySelectorAll("li");
  console.log(`Категория: ${titleH2[i].textContent}`);
  console.log(`Количество элементов: ${itemH2.length}`);
}


