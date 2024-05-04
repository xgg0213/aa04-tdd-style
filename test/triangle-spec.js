// Your code here 
const chai = require('chai');
const expect = chai.expect;
const {Triangle, Scalane, Isosceles} = require('../problems/triangle.js');

describe('Triangle', () => {
    const triangle = new Triangle(3,4,5)
    describe('Triangel constructor function', () => {
        it('should intake the lengths of 3 sides: side1, side2, side3', () => {
            expect(triangle.side1).to.exist;
            expect(triangle.side2).to.exist;
            expect(triangle.side3).to.exist;
        });
        it('should set the 3 params properly', () => {
            expect(triangle.side1).to.equal(3);
            expect(triangle.side2).to.equal(4);
            expect(triangle.side3).to.equal(5);
        });
    });

    describe('getPerimeter()', () => {
        it('should return the perimeter of the triangle', () => {
            const perimeter = triangle.getPerimeter();
            expect(perimeter).to.equal(12);
        });
    });

    describe('hasValidSideLengths()', () => {
        it('should return true if it is a valid triangle, and false if it is invalid', () => {
            const tri1 = new Triangle(1,2,3);
            const tri2 = new Triangle(3,4,5);
            const res1 = tri1.hasValidSideLengths();
            const res2 = tri2.hasValidSideLengths();
            expect(res1).to.be.false;
            expect(res2).to.be.true;
        })
    })

    describe('validate()', () => {
        it('should add an isValid property to the triangle instance: true/false', () => {
            const tri1 = new Triangle(1,2,3);
            const tri2 = new Triangle(3,4,5);
            tri1.validate();
            tri2.validate();
            expect(tri1.isValid).to.be.false;
            expect(tri2.isValid).to.be.true;
        });
    });

    describe('getValidTriangles(...triangles)', () => {
        it('should return all valid triangle instances', () => {
            const tri1 = new Triangle(1,2,3);
            const tri2 = new Triangle(3,4,5);
            tri1.validate();
            tri2.validate();

            const res = Triangle.getValidTriangles(tri1, tri2);

            expect(res).to.deep.equal([tri2]); // need to deep equal for all arrays
        });
    });
})

describe('Scalane', () => {
    const scalane = new Scalane(3,4,5);
    const scalane2 = new Scalane(3,3,5)
    describe('Scalane constructor function', () => {
        it('should intake the lengths of 3 sides: side1, side2, side3 and isValidTriangle set to true/false', () => {
            expect(scalane.side1).to.exist;
            expect(scalane.side2).to.exist;
            expect(scalane.side3).to.exist;
            expect(scalane.isValidTriangle).to.exist;
        });
        it('should set the 3 params properly', () => {
            expect(scalane.side1).to.equal(3);
            expect(scalane.side2).to.equal(4);
            expect(scalane.side3).to.equal(5);
            expect(scalane.isValidTriangle).to.be.true;
        });
    });

    describe('isScalane()', () => {
        it('should return true if it is a valid scalene triangle, and false if it is invalid', () => {
            const res = scalane.isScalane();
            const res2 = scalane2.isScalane();
            expect(res).to.be.true;
            expect(res2).to.be.false;
        });
    });

    describe('validate()', () => {
        it('should add an isValidScalene property to the scalene triangle instance, true if it is a valid scalene triangle and false if not', () => {
            scalane.validate();
            scalane2.validate();
            expect(scalane.isValidScalane).to.be.true;
            expect(scalane2.isValidScalane).to.be.false;
        })
    })
});

describe('Isosceles', () => {
    const isoscele = new Isosceles(3,4,5);
    const isoscele2 = new Isosceles(3,3,5)
    describe('Isosceles constructor function', () => {
        it('should intake the lengths of 3 sides: side1, side2, side3 and isValidTriangle set to true/false', () => {
            expect(isoscele.side1).to.exist;
            expect(isoscele.side2).to.exist;
            expect(isoscele.side3).to.exist;
            expect(isoscele.isValidTriangle).to.exist;
        });
        it('should set the 3 params properly', () => {
            expect(isoscele.side1).to.equal(3);
            expect(isoscele.side2).to.equal(4);
            expect(isoscele.side3).to.equal(5);
            expect(isoscele.isValidTriangle).to.be.true;
        });
    });

    describe('isIsoscele()', () => {
        it('should return true if it is a valid scalene triangle, and false if it is invalid', () => {
            const res = isoscele.isIsoscele();
            const res2 = isoscele2.isIsoscele();
            expect(res).to.be.false;
            expect(res2).to.be.true;
        });
    });

    describe('validate()', () => {
        it('should add an isValidIsoscele property to the scalene triangle instance, true if it is a valid scalene triangle and false if not', () => {
            isoscele.validate();
            isoscele2.validate();
            expect(isoscele.isValidIsoscele).to.be.false;
            expect(isoscele2.isValidIsoscele).to.be.true;
        })
    })  

})

