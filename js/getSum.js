function isFloatingTen(memory, result) {
  if (memory > 0) {
    result.push(1);
  }

  return result;
}

// eslint-disable-next-line max-statements
function getSum(firstNumber, secondNumber) {
  const maxArrayLength = Math.max(firstNumber.length,secondNumber.length);

  const firstArray = firstNumber.split('').reverse();
  const secondArray = secondNumber.split('').reverse();
  const result = [];
  let memory = 0;

  for (let i = 0; i < maxArrayLength; i++) {
    secondArray[i] = secondArray[i] || 0;
    firstArray[i] = firstArray[i] || 0;

    const sum = +secondArray[i] + +firstArray[i];
    if (sum >= 10) {
      result.push(sum + memory - 10);
      memory = 1;

      continue;
    }

    result.push(sum + memory);
    memory = 0;
  }

  isFloatingTen(memory, result);
  return result.reverse().join('');
}

getSum('555','555');