function returnsThree() {
  // Your code here 
  return 3;
}

function reciprocal(n) {
  // Your code here
  // check if n is invalid
  if (n === 0 || typeof n !== 'number') {
    throw Error('Invalid input')
  }
  
  if (n < 1 || n > 1000000) {
    throw RangeError('Outof expected range: 1 - 1,000,000')
  }
  
  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
