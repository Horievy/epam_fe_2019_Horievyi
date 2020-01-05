function isUppercaseLetter(title) {
  return title.charCodeAt(0) >= 65 && title.charCodeAt(0) <= 90;
}

function validateTitleLength(title) {
  return title.length >= 3 && title.length <= 19;
}

function isString(title) {
  return typeof (title) === 'string';
}

function isAppropriateCharachers(title) {
  const specialCharacters = ' !:-?.,`';

  return title.split('').every((item) => {
    return item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91 ||
      item.charCodeAt(0) > 96 && item.charCodeAt(0) < 123 ||
      specialCharacters.split('').includes(item);
  });
}

function validate(title) {
  if (!isString(title) ||
    !validateTitleLength(title) ||
    !isUppercaseLetter(title[0])) {
    return false;
  }

  return isAppropriateCharachers(title);
}

validate('itle!!');