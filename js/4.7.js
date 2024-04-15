const loadMoreButton = document.querySelector('.comments-loader');
let visibleComments = 5;

loadMoreButton.addEventListener('click', () => {
  visibleComments += 5;
  displayComments(currentImageComments.slice(0, visibleComments));

  if (visibleComments >= currentImageComments.length) {
    loadMoreButton.classList.add('hidden');
  }
});
