// Your code here 
const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person.js');

describe('Person', ()=> {
    // how to use mocha hook here, and what is the benefit?
    // avoid repeatedly writing the same thing, in this case, beforeEach is better, beforeEach runs for every describe or it (this needs to be confirmed)
    // can try putting beforeEach in different places to test out
    
    // before(() => {
    //     const person = new Person()
    // }); 
    const person = new Person('mike', 32);

    describe('Person constructor function', () => { 
        it('should have name, age properties', () => {
            expect(person.name).to.exist;
            expect(person.age).to.exist;
        });

        it('should set the name, age properties when a new Person is created', () => {
            expect(person.name).to.equal('mike');
            expect(person.age).to.equal(32);
        });
    });

    describe("sayHello function", () => {
        it("should return return a string of the Person instance's name and a greeting message", () => {
            expect(person.sayHello()).to.equal('Hello, mike!') // can we write it as (`Hello, ${person.name}!`)? Yes!!
        });
      });

    describe("visit(otherPerson)", () => {
        it("should return return a string stating that this instance visited the passed-in person instance", () => {
            const otherPerson = new Person('erin', 18);
            expect(person.visit(otherPerson)).to.equal('mike visited erin') 
        });
    });

    // is this one as intended by the readme?
    // if yes, how to invoke this.visit(newPerson) to get to the results?
    // answer: otherPerson is also an instance
    describe("switchVisit(otherPerson)", () => {
        it("should return a string stating that the passed-in person instance vsited the instance name", () => {
            const otherPerson = new Person('erin', 18);
            expect(person.switchVisit(otherPerson)).to.equal('erin visited mike') 
        });
    });

    describe("update(obj)", () => {
        context('if with invalid input', () => {
            it("should throw a TypeError if the input obj is not an object", () => {
                const obj = '123';
                expect(() => person.update(obj)).to.throw(TypeError); // do we need to ensure a proper error message is printed?
                // not required to check error message, but would be good to have:
                // key word for checking error message is ...to.throw(TypeError, 'error message')
                // the error message does not have to === the message, will cover this part later in the course
            });

            it("should throw a TypeError if the input obj does not have name and age properties", () => {
                const obj = {gender: 'F'};
                expect(() => person.update(obj)).to.throw(TypeError)
            });
        })

        context('if with valid input', () => {
            it("should update the instance with the obj name and age", () => {
                const obj = {name:'leo', age: 12};
                person.update(obj);
                expect(person.name).to.equal(obj.name);
                expect(person.age).to.equal(obj.age);
            });
        });
    });

    describe("tryUpdate(obj)", () => {
        context('if tryUpdate(obj) does not successfully run', () => {
            it("should return false if input is not an object", () => {
                const obj = '123';
                const res = person.tryUpdate(obj);
                expect(res).to.be.false;
            });

            it("should return false if the input obj does not have name and age properties", () => {
                const obj = {gender: 'F'};
                const res = person.tryUpdate(obj);
                expect(res).to.be.false;
            });
        })

        context('if tryUpdate(obj) successfully runs', () => {
            it("should return true and update the instance with the obj name and age", () => {
                const obj = {name:'leo', age: 12};
                const res = person.tryUpdate(obj);

                expect(res).to.be.true;
                expect(person.name).to.equal(obj.name);
                expect(person.age).to.equal(obj.age);
            });
        });
    });

    // note: no foundamental difference between testing for instance vs. static methods

    describe("greetAll(obj)", () => {
        it("should return an array with sayHello() returned value with each instance", () => {
            // need to write multiple instances: const obj = ....
            // call the static function: Person.greetAll(obj)
            // ensure the returned array deeply equals: expect().to.deep.equal([])
            const person = new Person('mike', 32);
            const res = Person.greetAll([person]);

            expect(res).to.deep.equal(['Hello, mike!'])
            
        });
    });


})
