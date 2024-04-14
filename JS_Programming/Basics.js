'use strict';
//Variables and Scope
//const -> One time initialization, block scope.
//let -> block scope.
//var -> function scope, outside function - global scope.
const num = 10;
console.log('Number is', num);
let color = 'black';
console.log('color is', color);
var alsoNum = 20, idkNum;
console.log(alsoNum, idkNum);
console.log(name);
//Hoisting -> variable initialization is transferred to the beginning of code.
var name;
// let name = "saathwika" -> gives error.
function test() {
    //hoisting check for let, const -> fails.
    let anotherNum = 50;
    console.log('This is a test');
    console.log(anotherNum);
}
test(); 
//Strings
let str = 'abcd'
console.log(str + 10);
console.log(str +'fg');
console.log(str == 'abcd');
console.log(str.includes('cd'));
console.log(str.endsWith('d'));
console.log(str.toUpperCase());
console.log('ABCD'.toLowerCase());
console.log(str.substring(1, 3));
console.log(str.slice(1, 3));
console.log(str.padStart(5, '*'));
console.log(str.padEnd(5, '*'));
console.log(' fgh '.trim());
console.log('str '.trimEnd());
console.log(' str'.trimStart());
console.log('abc, ijk, l'.split(','));
//Error Handling
try {
    throw new Error ('An Error'); //-> Error Handled
} catch(error) {
    console.log(error);
}
//throw new Error ('An Error'); -> No catch block for error handling
console.log('An Error');
//Comments
/* Multi
Line
Comment */
console.error('error message');
console.debug('Debug Message');
console.table([[1, 2], [3, 4]]);
console.count();
console.count();
console.countReset();
console.count('key');
console.count('key');
console.countReset('key');
console.count('key');

