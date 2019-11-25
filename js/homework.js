let age = 12;

if (age > 5) {
  age = 5;
  // eslint-disable-next-line no-console
  console.log('More than 5');
} else if (age < 10) {
  // eslint-disable-next-line no-console
  console.log('Less than 5');
}

// Second console is not called because age is 12 and this is not suitable with condition (age < 10)

let message;
const login = 'Maks';

// eslint-disable-next-line no-nested-ternary
login === 'Maks'
  ? message = 'Hi, Maks'
  // eslint-disable-next-line no-nested-ternary
  : login === 'Serg'
    ? message = 'Hi, Serg'
    : login === '' ? message = 'Hi undefined' : message = '';

// eslint-disable-next-line no-console
console.log(message);