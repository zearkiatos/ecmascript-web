function newFunction(name, age, country) {
  var name = name || "Pedro";
  var age = age || 32;
  var country = country || "VE";

  console.log(name, age, country);
}

//es6

function newFunctionES6(name = "Pedro", age = 32, country = "VE") {
  console.log(name, age, country);
}

newFunctionES6();
newFunctionES6("Ricardo", 23, "CO");

let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;

console.log(epicPhrase);
//es6
let epicPhraseES6 = `${hello} ${world}`;

console.log(epicPhraseES6);
