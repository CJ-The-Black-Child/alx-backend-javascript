function calculateNumber (type, a, b) {
  const firstNum = Math.round(a);
  const secondNum = Math.round(b);

  if (type === 'SUM') {
    return firstNum + secondNum;
  }

  if (type === 'SUBTRACT') {
    return firstNum - secondNum;
  }

  if (type === 'DIVIDE') {
    return secondNum === 0 ? 'Error' : firstNum / secondNum;
  }

  return 'Error';
}

module.exports = calculateNumber;
