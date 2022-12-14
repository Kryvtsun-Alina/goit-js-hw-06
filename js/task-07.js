const inputChangeFontesize = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputChangeFontesize.addEventListener('input', event => {
    textEl.style.fontSize = `${event.target.value}px`;
});