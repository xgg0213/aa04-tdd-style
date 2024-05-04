// Your code here 
const chai = require('chai');
const expect = chai.expect;
const reverseString = require('../problems/reverse-string.js');

describe("reverseString(string)", () => { // is there any difference between reverseString(string) and reverseString function? 
                                          // it's just a description, depends on the request, can be anything
    it("should throw a TypeError if not a string", () => {
        const string = 123;
        // why cannot write the below function as expect(reverseString(string).to.throw(TypeError))?
        // further exploration needed
        expect(() => reverseString(string)).to.throw(TypeError); 
    });
    
    it("should return the string reversed", () => {
      const string = 'fun';
  
      const actual1 = reverseString(string); // should return 'nuf'
  
      expect(actual1).to.equal('nuf');
    });
});

// notes: should always run 'npm test' or 'mocha' to test test spec, NOT node, because node does not have Mocha specific dependencies