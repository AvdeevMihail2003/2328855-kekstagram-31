function displayThumbnails(images) {
  const template = document.querySelector('#picture').content.querySelector('picture');
  const picturesContainer = document.querySelector('.pictures');

  images.forEach(image => {
    const pictureElement = template.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = image.url;
    pictureElement.querySelector('.picture__likes').textContent = image.likes;
    pictureElement.querySelector('.picture__comments').textContent = image.comments.length;
    picturesContainer.appendChild(pictureElement);

    pictureElement.addEventListener('click', () => {
      showBigPicture(image);
    });
  });
}

export { displayThumbnails };

