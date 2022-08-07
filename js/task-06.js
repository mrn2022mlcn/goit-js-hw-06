const input = document.querySelector('input[data-length="6"]');
const inputMain = document.querySelector('input');
const style = document.querySelector('style');
input.addEventListener('blur', inputBlur);

function inputBlur(event) {
    console.log(event.currentTarget.value.length);
if(event.currentTarget.value.length === Number (input.dataset.length)) {
    inputMain.classList.add("valid");
    inputMain.classList.remove("invalid");
} else {
    inputMain.classList.add("invalid");
}
}