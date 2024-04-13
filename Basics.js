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