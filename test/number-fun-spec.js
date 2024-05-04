// Your code here 
const chai = require('chai');
const expect = chai.expect;
const {returnsThree, reciprocal} = require('../problems/number-fun.js')

describe("returnsThree()", () => {
    it("should return 3", () => {
        const answer = 3;
        expect(returnsThree()).to.equal(answer);
    });
});

describe("reciprocal(n)", () => {
    context("if within invalid arguments", () => {
        it("should throw an error if not a number", () => {
            const n = '123'
            expect(() => reciprocal(n)).to.throw(Error); 
        });
        
        it("should throw an error if input is 0", () => {
            const n = 0
            expect(() => reciprocal(n)).to.throw(Error); 
        });

        it("should throw an error if outside range", () => {
            const n = 2000000
            expect(() => reciprocal(n)).to.throw(RangeError); 
        });
    });

    context("if within valid arguments", () => {
        it("should return reciprocal as 1/n", () => {
            const n = 4;
            const answer = 1/4;
            expect(reciprocal(n)).to.equal(answer); 
        });
    
    });
});
