const textInputEl = document.querySelector('#validation-input');
console.log(textInputEl.dataset.length);
textInputEl.addEventListener('blur', () => {
    if (textInputEl.value.length !== Number(textInputEl.dataset.length)) {
        textInputEl.classList.add(`invalid`);
      } else {
      textInputEl.classList.replace(`invalid`, `valid`);
    }
});