//class Person {
//    name;
//    constructor(name) {
//      this.name = name;
//    }
//    introduceSelf() {
//      console.log("Hi! I'm ${this.name}");
//    }
//  }

class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

//myExample.#somePrivateMethod(); // SyntaxError

