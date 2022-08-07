function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector('button.change-color');
console.log(changeButton);
const body = document.querySelector('body');
console.log(body);
const colorValue = document.querySelector('span.color');
console.log(colorValue);


changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
})