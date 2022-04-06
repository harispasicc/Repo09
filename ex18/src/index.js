function myForLoop1(){
    var evenNumbers = [];
for(i=0; i<9; i++){
    if(i % 2 === 0){
        evenNumbers.push(i);
    }  
}return evenNumbers.join(",");
}

function myForLoop2(){
    var evenInverseNumbers = [];
for(i=0; i<9; i++){
    if(i % 2 === 0){
        evenInverseNumbers.push(i);
    }  
}return evenInverseNumbers.reverse().join(",");
}



console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};