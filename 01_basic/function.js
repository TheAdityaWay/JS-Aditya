const a = function () {};
a.displayName = "MyFunction";

a; // function MyFunction()

//function Ctor() {}
//const inst = new Ctor();
//console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true

function Ctor() {}
const p1 = new Ctor();
const p2 = new Ctor();
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1

class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  Dog.prototype.species = "cat";
  console.log(new Dog("Jack").species); // "cat"

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World");
console.log(text);