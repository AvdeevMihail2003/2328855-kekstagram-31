document.addEventListener('DOMContentLoaded', () => {
  const commentField = document.getElementById('commentField');

  commentField.addEventListener('keydown', (event) => {
      // Проверка нажатия клавиши Esc и предотвращение закрытия формы
      if (event.key === 'Escape') {
          event.stopPropagation(); // Останавливает всплытие события
      }
  }, true); // Используем фазу перехвата для отлова события до его достижения поля ввода
});
