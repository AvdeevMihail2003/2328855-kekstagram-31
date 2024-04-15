function showError() {
  const errorMessageTemplate = document.querySelector('#data-error').content;
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', errorMessageElement);
  setTimeout(() => {
    errorMessageElement.remove();
  }, 5000);
}

export { showError };
