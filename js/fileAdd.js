const inputElement = document.querySelector('.img-upload__input');
const imageEditForm = document.querySelector('.img-upload__overlay');
const imagePreview = document.querySelector('.img-upload__preview img');
const miniImages = document.querySelectorAll('li.effects__item .effects__preview')
const bodyElement = document.body;

const readURL = async file => {
  return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = e => res(e.target.result);
      reader.onerror = e => rej(e);
      reader.readAsDataURL(file);
  });
};


const showImageEditForm = async (image) => {
  const url = await readURL(image);
  imagePreview.src = url;

  for (const miniImage of miniImages) {
    miniImage.style.backgroundImage = `url(${url})`;
  }

  imageEditForm.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
}

export const bindChange = () => {
  inputElement.addEventListener('change', function(event) {
    event.preventDefault()
    const image = event.currentTarget.files[0];
    if (image) {
      showImageEditForm(image);
    }
  });
}
