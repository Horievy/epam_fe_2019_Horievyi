function sum(...args) {
  let result = 0;
  args.reduce((accumulator, item) => {
    if (typeof item === 'number' && item % 15 === 0) {
      item *= -1;
    }

    return result = accumulator + +item;
  }, 0);

  return result;
}

sum('5',30);