document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const submitButton = document.getElementById('submitButton');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Предотвратить стандартное поведение формы

      const formData = new FormData(form);

      // Блокируем кнопку "Отправить"
      submitButton.setAttribute('disabled', 'disabled');

      // Отправка данных формы с использованием fetch
      fetch('https://31.javascript.htmlacademy.pro/kekstagram', {
          method: 'POST',
          body: formData,
      })
      .then(response => {
          if (response.ok) {
              return response.json(); // Или обработка ответа в соответствии с ожидаемым форматом
          }
          throw new Error('Network response was not ok.');
      })
      .then(data => {
          console.log('Success:', data);
          // Действия после успешной отправки, например, очистка формы или вывод сообщения
      })
      .catch((error) => {
          console.error('Error:', error);
          // Обработка ошибок отправки, например, вывод сообщения об ошибке
      })
      .finally(() => {
          // Разблокировка кнопки "Отправить" в любом случае после завершения запроса
          submitButton.removeAttribute('disabled');
      });
  });
});
