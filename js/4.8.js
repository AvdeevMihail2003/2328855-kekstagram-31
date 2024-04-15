function updateCommentsCount(visible, total) {
  document.querySelector('.social__comment-count').textContent = `${visible} из ${total} комментариев`;
  if (visible >= total) {
    document.querySelector('.comments-loader').classList.add('hidden');
  } else {
    document.querySelector('.comments-loader').classList.remove('hidden');
  }
}
