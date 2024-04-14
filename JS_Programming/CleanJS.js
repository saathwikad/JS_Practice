const arr = [1, 2, 3];
//doubledArray = arr.map(double); double -> reference
doubledArray = arr.map(function double (value) {
    return value  * 2;
});
threeArray = arr.map(num => { //Arrow Functions
    return num  * 3;
});
console.log(arr, doubledArray, threeArray);
addOne = arr.map(num => {
    return num + 1;
});
console.log(addOne);
addTwo = arr.map(num => num + 2); //only single expression
console.log(addTwo);
const [first, second] = arr;
console.log(first, second);
const student = {
    name : "saathwika",
    regNo : "22B01A0536",
};
const {name: myName, ...rest} = student;
console.log(myName);
console.log(rest);
function toPrintName ({name}) {
    console.log(name);
}
toPrintName(student);
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [0, ...arr1, 8,  ...arr2];
console.log(combined);
//Template Literal
console.log(`Hello! ${student.name}`);
//null coalescing operator
const alsoName = null;
const defaultName = alsoName ?? 'Default';
console.log(defaultName);
//Optional Chaining
const person = {
    company: {
        employee : "Salary",
    },
};
console.log(person, person?.company, person?.company?.employee?.salary ?? 1200);
const flag = true;
function toDisplay() {
    console.log("Displaying");
}
flag && toDisplay();