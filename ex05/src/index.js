function compareStricValues(m){
    if(m != 55){
        return "Not Equal";

    }
    return "Equal";
}

compareStricValues();
console.log(compareStricValues(55));
console.log(compareStricValues("55"));
console.log(compareStricValues("21"));
console.log(compareStricValues(12));
console.log(compareStricValues("Doe"));

module.exports = compareStricValues;