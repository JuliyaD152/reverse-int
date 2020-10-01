module.exports = function reverse (n) {
    let newNum = Math.abs(n);
    let reverseNum = newNum.toString().split('').reverse().join('');
    return Number(reverseNum); 
};

