function showBigPicture(image) {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('.big-picture__img img').src = image.url;
  bigPicture.querySelector('.likes-count').textContent = image.likes;
  bigPicture.querySelector('.comments-count').textContent = image.comments.length;

  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  displayComments(image.comments);
}

export { showBigPicture };
