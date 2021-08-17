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

module.exports = {
  newFunction,
  newFunctionES6
}