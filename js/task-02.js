
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
console.log(ulEl);
const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
console.log(list);
ulEl.innerHTML = list;