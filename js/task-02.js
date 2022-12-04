const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');
const productArray = [];
ingredients.forEach(ingredient => {
  const product = document.createElement('li');
  product.classList.add('item');
  product.textContent = ingredient;
  productArray.push(product);
});
listIngredients.append(...productArray);

