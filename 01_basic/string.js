const name = "Aditya"
const repoCount = 5

console.log(name);
//console.log('Hello $ {name}');
console.log(name +" " + repoCount + " value");
console.log('Hello my name is ${name} and my RepoCount is ${repoCount}');

const obj = {
    foo() {
      return 'bar';
    },
  };
  console.log(obj.foo());

const greeting = '   Hello world!      ';
console.log(greeting);
console.log(greeting.trim());
console.log(greeting.toUpperCase());
console.log(greeting.length);

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
const chars = str.split('');
console.log(chars[8]);
const strCopy = str.split();
console.log(strCopy);

//const index = 4;
//console.log('The character at index ${index} is ${sentence.charAt(index)}');

let index = 5;
console.log(`An index of ${index} returns the character ${str.at(index)}`);
index = -4;
console.log(`An index of ${index} returns the character ${str.at(index)}`);