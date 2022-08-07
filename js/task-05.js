const input = document.querySelector('#name-input');
const spanAnonymous = document.querySelector("#name-output");
input.addEventListener('input', inputChange);

function inputChange(event) {
    console.log(event.currentTarget.value)
    if(input.value === '') {
        return spanAnonymous.textContent = 'Anonymous'
    }else spanAnonymous.textContent = event.currentTarget.value;
}