let obj = {
  name: 'Ivan',
  surname: 'Baraban',
  age: 42,
  score: 12,
};

let obj2 = {
  name: 'Petya',
  surname: 'Padawan',
  age: 52,
  score: 28,
};

let obj3 = {
};

function patchObject(objName,firstMethod,secondMethod,thirdMethod) {
  if (objName === null) {
    objName = this;
  }

  objName.hello = firstMethod;
  objName.myAge = secondMethod;
  objName.showSuccessKoef = thirdMethod;
  return objName;
}

// eslint-disable-next-line func-names
const greetings = function hello(greeting) {
  return `${greeting}, my name is ${this.name}`;
};

// eslint-disable-next-line func-names
const showSuccess = function showSuccessKoef() {
  return this.age / this.score || 0;
};

// eslint-disable-next-line func-names
const howOldAreYou = function myAge() {
  return this.age || 'age is unavailable';
};

obj = patchObject(obj, greetings, howOldAreYou, showSuccess);
obj2 = patchObject(obj2, greetings, howOldAreYou);
obj3 = patchObject(null, greetings, howOldAreYou, showSuccess);
// console.log(obj.hello('Hi!'));
// console.log(obj.myAge());
// console.log(obj.showSuccessKoef());
// console.log(obj2.myAge());
// console.log(obj2.hello('Hi sir'));
// console.log(obj3.hello('Good Day'));
// console.log(obj3.showSuccessKoef());
// console.log(obj3.myAge());
