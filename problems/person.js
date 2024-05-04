class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 

  sayHello() {
    return `Hello, ${this.name}!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {  
    return otherPerson.visit(this);

  }

  update(obj) {
    // invalid inputs
    if (typeof obj !== 'object') {
      throw TypeError('Not an object!')
    } else if (typeof obj === 'object' && (obj.name === undefined || obj.age === undefined)) {
      throw TypeError('Object does not have name and/or age')
    } else if (typeof obj === 'object' && (obj.name !== undefined && obj.age !== undefined)) {
      this.name = obj.name;
      this.age = obj.age;
    }
  }

  tryUpdate(obj) { // should use try catch here: common practice in asynchronous code, when need to run through the code regardless of error message
    try {
      this.update(obj);
      return true;
      // console.log(this);
    } catch (e) {
      // if (e) 
      return false;
    }
    
  }
  
  static greetAll(persons) {
    let res = [];
    for (let i = 0; i < persons.length; i++) {
      res.push(persons[i].sayHello());
    }
    return res;
  }
}

// let person = new Person('mike',40);

// let test = person.tryUpdate({name:'leo', age:32});
// let res = Person.greetAll([person]);
// console.log(test);
// console.log(test);


module.exports = Person;
