function myFunction(myParameter) {
  if (myParameter) {
    return "The parameter is true!";
  }
  return "The parameter is false!";
}

myFunction(true);
console.log(myFunction(true));
myFunction(false);
console.log(myFunction(false));

module.exports = myFunction;
