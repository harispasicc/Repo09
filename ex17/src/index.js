function inverseWhile(){
    var fiveNumbers = 5;
    const result = [];
    while(fiveNumbers >= 0) {
       result.push(fiveNumbers);
        fiveNumbers--;
    } return result.join(",");
}
console.log(inverseWhile());
module.exports = inverseWhile;