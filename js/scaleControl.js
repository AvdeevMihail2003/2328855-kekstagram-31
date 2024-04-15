export function initializeScaleControl() {
  document.addEventListener('DOMContentLoaded', () => {
      const scaleSmaller = document.querySelector('.scale__control--smaller');
      const scaleBigger = document.querySelector('.scale__control--bigger');
      const scaleValue = document.querySelector('.scale__control--value');
      const previewImage = document.querySelector('.img-upload__preview img');

      let value = parseInt(scaleValue.value, 10);

      const updateScale = (newScale) => {
          value = newScale;
          scaleValue.value = `${value}%`;
          previewImage.style.transform = `scale(${value / 100})`;
      };

      scaleSmaller.addEventListener('click', () => {
          if (value > 25) {
              updateScale(value - 25);
          }
      });

      scaleBigger.addEventListener('click', () => {
          if (value < 100) {
              updateScale(value + 25);
          }
      });
  });
}
