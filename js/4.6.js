function displayComments(comments) {
  const bigPicture = document.querySelector('.big-picture');
  const commentsList = bigPicture.querySelector('.social__comments');
  const commentTemplate = commentsList.querySelector('.social__comment');

  commentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.slice(0, 5).forEach(comment => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragment.appendChild(commentElement);
  });

  commentsList.appendChild(fragment);
  updateCommentsCount(5, comments.length);
}

export { displayComments };
