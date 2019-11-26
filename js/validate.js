function checkType(string) {
  if (typeof (string) !== 'string') {
    throw 'Incorrect input data';
  }
}

function isAppropriateCharachers(string) {
  let result;
  string.split('').forEach((item) => {
    item.charCodeAt(0) > 31 && item.charCodeAt(0) < 127 ? result = 'VALID' : result = 'INVALID';
  });
  return result;
}

function validate(string) {
  checkType(string);

  if (string.length < 3 ||
     string.length > 19 ||
     string.charAt(0) !== string.charAt(0).toUpperCase() ||
     !isNaN(string.charAt(0))) {
    return 'INVALID';
  }

  isAppropriateCharachers(string);
}

validate('12title');
