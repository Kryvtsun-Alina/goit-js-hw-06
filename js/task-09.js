function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};
const btnChangeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
btnChangeColor.addEventListener('click', e => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
});
