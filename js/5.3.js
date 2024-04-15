function debounce(callback, delay = 500) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, arguments);
    }, delay);
  };
}

const filters = document.querySelector('.img-filters');
const defaultButton = filters.querySelector('#filter-default');
const randomButton = filters.querySelector('#filter-random');
const discussedButton = filters.querySelector('#filter-discussed');

let currentImages = [];

function applyFilter(filterFunction) {
  const filteredImages = filterFunction(currentImages);
  displayThumbnails(filteredImages);
}

defaultButton.addEventListener('click', debounce(() => applyFilter(defaultFilter)));
randomButton.addEventListener('click', debounce(() => applyFilter(randomFilter)));
discussedButton.addEventListener('click', debounce(() => applyFilter(discussedFilter)));
