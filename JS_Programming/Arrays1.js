const Array1 = [];
const Array2 = new Array(5);
Array1.length = 3;
console.log(Array1, Array2); //[ <3 empty items> ] [ <5 empty items> ]
Array2.fill(1);
Array1.fill(2);
console.log(Array1[0], Array2[1]); //2 1
console.log(Array1, Array2); //[ 2, 2, 2 ] [ 1, 1, 1, 1, 1 ]
Array1.length = 2;
Array2[1] = 2;
Array2[3] = 2;
console.log(Array1, Array2); //[ 2, 2 ] [ 1, 2, 1, 2, 1 ]
console.log(Array2.includes(2), Array1.includes(1)); //true false
console.log(Array2.indexOf(2), Array2.lastIndexOf(2)); //1 3
Array1.push(3);
Array1.push(4, 5);
console.log(Array1); //[ 2, 2, 3, 4, 5 ]
console.log(Array1.pop()); //5
console.log(Array1); //[ 2, 2, 3, 4 ]
Array1.unshift(1);
Array1.unshift(6, 7);
console.log(Array1); //[ 6, 7, 1, 2, 2, 3, 4]
console.log(Array1.shift()); //6
console.log(Array1); //[ 7, 1, 2, 2, 3, 4 ]
console.log(Array.isArray(Array1)); //true
console.log(Array1 instanceof Array); // true
 