function updateCommentsCount(visible, total) {
  const commentCountElement = document.querySelector('.social__comment-count');
  commentCountElement.textContent = `${visible} из ${total} комментариев`;

  const loadMoreButton = document.querySelector('.comments-loader');
  if (visible >= total) {
    loadMoreButton.classList.add('hidden');
  } else {
    loadMoreButton.classList.remove('hidden');
  }
}

export { updateCommentsCount };
