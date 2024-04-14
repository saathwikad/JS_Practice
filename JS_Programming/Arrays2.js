Array1 = [1, 2, 3, 4, 5];
Array1.splice(1, 2, "Hello", "World!", "JS");
console.log(Array1); //[ 1, 'Hello', 'World!', 'JS', 4, 5 ]
const Array2 = Array1.slice(1, 3); 
console.log(Array1, Array2); //[ 1, 'Hello', 'World!', 'JS', 4, 5 ] [ 'Hello', 'World!' ]
const Array3 = Array2.concat(["JS", "Is", "Fun"]);
console.log(Array2, Array3); //[ 'Hello', 'World!' ] [ 'Hello', 'World!', 'JS', 'Is', 'Fun' ]
Array1.reverse();
console.log(Array2.join('*')); //Hello*World!
console.log(Array1); //[ 5, 4, 'JS', 'World!', 'Hello', 1 ]
//Looping Arrays
let index = 0;
for (const value of Array1) { 
    console.log(index, value);
    index++;
}
//forEach
Array2.forEach(function(value, index){
    console.log(index, value);
});
//map
Array4 = [1, 2, 3];
const mappedArray = Array4.map(function(value, index){
    return value + index;
});
console.log(mappedArray); //[ 1, 3, 5 ]
//filter
const filteredArray = Array4.filter(function(value){
    return value > 1;
});
console.log(filteredArray); //[ 2, 3 ]
//find
const findTheArray = Array4.find(function(value){
    return value > 1;
});
console.log(findTheArray); //2
//findIndex
const findTheIdexArray = Array4.findIndex(function(value){
    return value > 1;
});
console.log(findTheIdexArray); //1
//every
const allPasses = Array4.every(function(value){
    return value > 1;
});
console.log(allPasses); //false
//some
const somePasses = Array4.some(function(value){
    return value > 1;
});
console.log(somePasses); //true
//reduce
const findSum = Array4.reduce(function(accumulator, currValue){
    return accumulator + currValue;
}, 1); // -> initial value of accumulator
console.log(findSum); //7
//reduceRight
const findSub = Array4.reduce(function(accumulator, currValue){
    return accumulator - currValue;
}, 1); // -> initial value of accumulator
console.log(findSub); //-5
Array5= [3, 4, 1, 2]
Array4.sort();
console.log(Array4);
Array5.sort(compareNumbers);
function compareNumbers(firstNumber, seconNumber) {
    return 0; //default -> [3, 4, 1, 2]
    //return firstNumber - secondNumber; increasing -> [1, 2, 3, 4]
    //return seconNumber - firstNumber; decreasing -> [4, 3, 2, 1]
}
console.log(Array5);