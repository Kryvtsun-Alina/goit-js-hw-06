const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listImages = document.querySelector('.gallery')
const markup = images
  .map((image) => `<li><img class="item-image" src=${image.url} width = "400" height = "265" alt='${image.alt}'/></li>`)
  .join("");
  listImages.insertAdjacentHTML('beforeend', markup);
const pictures = document.querySelectorAll('.item-image');
listImages.style.display = 'flex';
listImages.style.flexWrap = 'column-reverse'
listImages.style.listStyle = 'none'
listImages.style.gap = '20px'
listImages.style.justifyContent = 'center'
listImages.style.height = '100%'
