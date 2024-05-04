// Your code here 
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter(){
        return this.side1+this.side2+this.side3;
    }

    hasValidSideLengths() {
        const arr = [this.side1, this.side2, this.side3]
        for (let i = 0; i < arr.length-1; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if (2 * (arr[i]+arr[j]) <= this.getPerimeter()) return false;
            }
        }
        return true;
    }

    validate() {
        this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles(...triangles) {
        let res = [];
        triangles.forEach((triangle) => {
            if (triangle.isValid === true) res.push(triangle);
        })

        return res;
    }
}

class Scalane extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths(); 
    }
    // can also do outside of constrcutor && inside an instance method, just not standalone
    // all instance methods are inherited automatically

    isScalane() {
        if (this.isValidTriangle === true) {
            const arr = [this.side1, this.side2, this.side3];
            for (let i = 0;i<arr.length-1; i++) {
                for (let j = i+1; j < arr.length; j++) {
                    if (arr[i] === arr[j]) return false;
                }
            }
        }
        return true;
    }

    validate() {
        this.isValidScalane = this.isScalane();
    }

}

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths(); // question: can this be declared this way? in general, how do we treat inherited methods & variables?
    }
    isIsoscele() {
        if (this.isValidTriangle === true) {
            const arr = [this.side1, this.side2, this.side3];
            for (let i = 0;i<arr.length-1; i++) {
                for (let j = i+1; j < arr.length; j++) {
                    if (arr[i] === arr[j]) return true;
                }
            }
        }
        return false;
    }

    validate() {
        this.isValidIsoscele = this.isIsoscele();
    }
}

module.exports = {
    Triangle,
    Scalane,
    Isosceles
}
