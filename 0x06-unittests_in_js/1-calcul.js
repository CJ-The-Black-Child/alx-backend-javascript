function calculateNumber(type, a, b) {
    let firstNum = Math.round(a);
    let secondNum = Math.round(b);

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
};

module.exports = calculateNumber;
