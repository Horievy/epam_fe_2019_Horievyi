// function checkType(string) {
//   if (typeof (string) !== 'string') {
//     throw 'Incorrect input data';
//   }
// }
//
// function isAppropriateCharachers(string) {
//   let result;
//   string.split('').forEach((item) => {
//     item.charCodeAt(0) > 31 && item.charCodeAt(0) < 127 ? result = 'VALID' : result = 'INVALID';
//   });
//   return result;
// }
//
// function validate(string) {
//   checkType(string);
//
//   if (string.length < 3 ||
//      string.length > 19 ||
//      string.charAt(0) !== string.charAt(0).toUpperCase() ||
//      !isNaN(string.charAt(0))) {
//     return 'INVALID';
//   }
//
//   isAppropriateCharachers(string);
// }
//
// validate('12title');

// function isUppercaseLetter(title) {
//   return title.charCodeAt(0) >= 65 && title.charCodeAt(0) <= 90;
// }
//
// function validateTitleLength(title) {
//   return title.length >= 3 && title.length <= 19;
// }
//
// function isString(title) {
//   return typeof (title) === 'string';
// }
//
function isAppropriateCharachers(title) {
  const specialCharacters = ' !:-?.,`';

  return title.split('').some((item) => {
    return item.charCodeAt(0) < 65 && item.charCodeAt(0) > 122
    //   ||
    // specialCharacters.split('').some((specialCharacter) => {
    //   return specialCharacter !== item;
    // });
  })
    ? 'VALID'
    : 'INVALID';
  // return title.split('').some((item) => {
  //   return specialCharacters.split('').some((specialCharacter) => {
  //     return specialCharacter !== item;
  //   });
  // });
}

console.log(isAppropriateCharachers('ASAaa'));
//
// function validate(title) {
//   if (!isString(title) ||
//     !validateTitleLength(title) ||
//     !isUppercaseLetter(title[0])) {
//     return 'INVALID';
//   }
//
//   return isAppropriateCharachers(title);
// }
//
// console.log(validate('Heasdasdsalo`'));
