function validateHashtags(input) {
  const hashtags = input.split(/\s+/);
  const hashtagRegex = /^#[A-Za-z0-9а-яА-Я]+$/;

  if (hashtags.length > 5) {
      return 'Нельзя указать больше пяти хэштегов.';
  }

  for (let i = 0; i < hashtags.length; i++) {
      const hashtag = hashtags[i];

      if (hashtag === '#') {
          return 'Хеш-тег не может состоять только из одной решётки.';
      }

      if (!hashtagRegex.test(hashtag)) {
          return 'Хеш-тег начинается с символа #, не может содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т.д.';
      }

      if (hashtag.length > 20) {
          return 'Максимальная длина одного хэштега 20 символов, включая решётку.';
      }

      for (let j = i + 1; j < hashtags.length; j++) {
          if (hashtag.toLowerCase() === hashtags[j].toLowerCase()) {
              return 'Один и тот же хэштег не может быть использован дважды.';
          }
      }
  }

  return 'Все хэштеги валидны!';
}

const hashtagsInput = '#Пример #Тест #JavaScript #Пример #test';
const validationResult = validateHashtags(hashtagsInput);
console.log(validationResult);
