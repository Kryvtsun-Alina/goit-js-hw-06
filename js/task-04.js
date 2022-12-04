let counterValue = 0;
const displayValue = document.querySelector('#value');
const btnMinus = document.querySelector('button[data-action="decrement"]')
const btnPlus = document.querySelector('button[data-action="increment"]')
btnMinus.addEventListener('click', () => {
    counterValue--
	displayValue.textContent = counterValue;       
});
btnPlus.addEventListener('click',  () => {
    counterValue++
	displayValue.textContent = counterValue;
});