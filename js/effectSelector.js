const inputsEffect = document.querySelectorAll('.effects__radio');
const imagePreview = document.querySelector('.img-upload__preview img');
const inputChangeContrast = document.querySelector('.effect-level__value');

const defaultMapEffects = (contrast) => ({
  'heat': 'filter: brightness(3);',
  'phobos': 'filter: blur(3px);',
  'marvin':'filter: invert(100%);',
  'sepia': `filter: sepia(${contrast});`,
  'chrome':'filter: grayscale(1);',
  'none':'filter: unset;'
})

const changeEffect = () => {
  for (let inputEffect of inputsEffect) {
    inputEffect.addEventListener('change', (e) => {
      inputChangeContrast.setAttribute('value','100'); //  разобраться почему не работает
      const type = e.target.value;
      const effects = defaultMapEffects(1);
      if (type in effects) {
        const style = effects[type];
        imagePreview.setAttribute('style', style);
      }
    })
  }
}

const changeContrastEffect = () => {
  inputChangeContrast.addEventListener('input', (e)=>{
    const contrast = +e.target.value;
    imagePreview.setAttribute('style', `filter: sepia(${contrast/100});`);
  })
}


export const effectSelector = () => {
  changeEffect();
  changeContrastEffect();
}
