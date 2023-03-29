const listItems = document.querySelectorAll('.behavioral-animation li');
const imageContainer = document.querySelector('.image-container');
const image = document.createElement('img');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgUrl = item.getAttribute('data-img');
    image.setAttribute('src', imgUrl);
    image.classList.add('animated-image');
    imageContainer.appendChild(image);
  });
});
