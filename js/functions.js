function stringlength (string, maxlength) {
  return string.length <= maxlength;
}

console.log(stringlength('проверяемая строка', 20));

function palindrom (stringcheck) {
  let stringreverse = stringcheck.toLowerCase();
  return stringreverse === stringcheck;
}

console.log(palindrom('топот'));

function palindromspace (stringcheckspace) {
  let stringreversespace = stringcheckspace.toLowerCase().replaceAll('').split('');
  let stringclearspace = stringcheckspace.replaceAll('').split('');
  return stringreversespace === stringclearspace;
}

console.log(palindromspace('Лёша на полке клопа нашёл '));
