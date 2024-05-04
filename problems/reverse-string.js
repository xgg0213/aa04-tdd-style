module.exports = function reverseString(string) {
  // Your code here 
  // step 1: check if string is a stirng
  if (typeof string !=='string') {
    throw new TypeError('Not a string!')
  }

  // step 2: if it is indeed a string, do the following
  let res = '';

  for (let i = string.length - 1; i >= 0; i--) {
    res += string[i]
  }
  return res;
};


