const inputChangeFontesize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inputChangeFontesize.addEventListener('change', event => {
    text.style.fontSize = `${event.target.value}px`;
});