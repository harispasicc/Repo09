function myDoWhile(){
    var myNumbers = 0;
    const result = [];
    do {
        result.push(myNumbers);
        myNumbers++;
    } while(myNumbers<10){
        return result.join(",");
    }
}

console.log(myDoWhile());

module.exports = myDoWhile;