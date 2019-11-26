function sum(...args) {
  let result = 0;
  args.forEach((item) => {
    if (typeof item === 'number' && item % 15 === 0) {
      item *= -1;
    }
    result += +item;
  });
  return result;
}

sum('5',15);