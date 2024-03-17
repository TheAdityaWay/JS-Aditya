let score = 33

/*
number => 2 to the power 53
bigint
string => " "
boolean true/false
null => standalone Value
undefine => 
symnol =>

object
*/

console.log(typeof "Aditya");
console.log(typeof undefined);
console.log(typeof null);

console.log(score);
console.log(typeof score);

async function populate() {
    const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
  }

console.log(typeof undefined); // undefined
console.log(typeof null); // object