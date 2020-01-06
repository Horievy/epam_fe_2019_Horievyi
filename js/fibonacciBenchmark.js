function calculateFibByRecursion(n) {
  return n <= 1
    ? n
    : calculateFibByRecursion(n - 1) + calculateFibByRecursion(n - 2);
}

function calculateFibByCycle(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }

  return b;
}

const test = (calculateFibonacci, label, fibonacciNumber = 15, iterationsQty = 10000) => {
  const start = performance.now();

  for (let i = 1; i <= iterationsQty; i++) {
    calculateFibonacci(fibonacciNumber);
  }

  const timePassed = (performance.now() - start);

  document.body.innerHTML = `
    ${document.body.innerHTML}
    <br>
    ${label}: ${timePassed} ms
  `;
};

test(calculateFibByRecursion, 'Recursion');
test(calculateFibByCycle, 'Cycle');