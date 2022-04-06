function compareDifferentValues(m, n){
    if(m === n){
        return "Equal";
    }
    return "Not Equal";
}
compareDifferentValues();
console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));

module.exports = compareDifferentValues;