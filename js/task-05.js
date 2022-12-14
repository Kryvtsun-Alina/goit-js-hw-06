const textInputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');
textInputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    return event.currentTarget.value
    ? (outputEl.textContent = event.currentTarget.value) 
    : (outputEl.textContent = "Anonymous");
};