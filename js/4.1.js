function fetchData() {
  document.addEventListener('DOMContentLoaded', () => {
    fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
      .then(response => response.json())
      .then(data => {
        displayThumbnails(data);
      })
      .catch(error => {
        showError();
      });
  });
}

export { fetchData };

