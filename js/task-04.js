let valEl = Number(document.querySelector('#value').textContent);

let countValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
console.log(dekrBtn);
const inkrBtn = document.querySelector('#counter').lastElementChild;
console.log(inkrBtn);
inkrBtn.addEventListener('click', event => {
  valEl += 1;
  countValue.innerText = valEl;
});

dekrBtn.addEventListener('click', event => {
  valEl -= 1;
  countValue.innerText = valEl;
});
console.log(countValue);