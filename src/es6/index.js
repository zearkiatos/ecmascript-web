let newFunction = function(name, age, country) {
  var name = name || "Pedro";
  var age = age || 32;
  var country = country || "VE";

  return name+", "+age+", "+country;
}

//es6

let newFunctionES6 = function newFunctionES6(name = "Pedro", age = 32, country = "VE") {
  return name+", "+age+", "+country;
}

const slugFormat = (name, age, country) => {
  return `${name}-${age}-${country}`
};

const greetingName = name => {
  return `Hi ${name}`;
};

const square = num => num*num;

const helloPromise = (forceResult = true) => {
  return new Promise((resolve, reject) => {
    if (forceResult) {
      resolve('Hey! 🟢');
    } else {
      reject('Ups!! something was wrong 💥');
    }
  });
};

module.exports = {
  newFunction,
  newFunctionES6,
  slugFormat,
  greetingName,
  square,
  helloPromise
}