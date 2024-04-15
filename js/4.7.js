let visibleComments = 5;

function setupLoadMoreComments(currentImageComments) {
  const loadMoreButton = document.querySelector('.comments-loader');

  loadMoreButton.addEventListener('click', () => {
    visibleComments += 5;
    displayComments(currentImageComments.slice(0, visibleComments));

    if (visibleComments >= currentImageComments.length) {
      loadMoreButton.classList.add('hidden');
    }
  });
}

export { setupLoadMoreComments };
