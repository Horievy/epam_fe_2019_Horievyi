function calculateCash(bill, cash) {
  switch (bill) {
    case 25:
      cash[25]++;
      break;

    case 50:
      cash[50]++;
      cash[25]--;
      break;

    case 100:
      cash[50]--;
      cash[25]--;
      break;
  }
}

function tickets(bills) {
  const cash = {
    25: 0,
    50: 0,
  };

  for (let i = 0; i < bills.length; i++) {
    bills[i] = +bills[i];

    calculateCash(bills[i], cash);

    if (cash[25] < 0 || cash[50] < 0) {
      return 'FALSE';
    }
  }

  return 'TRUE';
}

tickets([25,25,50]);
tickets([25,100]);
tickets([25,25,50,100]);
tickets([25,50,100]);
tickets(['25','25', '50','100']);
tickets(['25','50','100']);