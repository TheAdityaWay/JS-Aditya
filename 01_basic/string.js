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

const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);

const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
//console.log(gameName.split(' '));