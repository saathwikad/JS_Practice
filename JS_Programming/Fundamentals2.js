//Equality
console.log(5 == '5'); // "loose" equality, values -> converts '5' to 5
console.log(5 === '5'); //strict equality, type, values
//Type Coercion -> Explicit
console.log(Number(true));
console.log(true == 0);
console.log(Boolean(10));
console.log(Boolean(0));
console.log(String(2));
// 'abc' == 'abc' is only True
// someValue == null checks for undefined as well
//Objcts
const alsoKey = 'key';
const age = 18;
const student = {
    name : "Saathwika",
    age : age,
    regNo : "22B01A0536",
    subjects : ['M', 'P', 'C'],
    value : 0,
    [alsoKey] : 123,
    display() {
        console.log("Requested to display");
    },
    also : () => console.log("Also Displaying"),
    get getAge() {
        return this.age;
    },
    set setRating(value) {
        this.value = value;
    },

};
console.log(student);
console.log(student.regNo);
//Object property that is not defined is undefined by default.
student.name = "Bhaskar";
console.log(student, student.name);
delete student.regNo;
console.log(student);
//Equaliy check for objects -> Checks same object even for  ==,  ===
console.log({} == {}); // false
console.log([1] == [1]); // false
const obj = new Object();
obj.value = 15;
console.log(obj);
//Constructor Functions
function Engineer(cgpa, rank) {
    this.cgpa = cgpa;
    this.rank = rank;
}
const saathwika = new Engineer(9.28, 29);
const bhaskar = new Engineer(8.72, 8);
console.log(saathwika, bhaskar);
console.log('name' in student); //-> checks inherited properties as well
console.log(student.hasOwnProperty('subjects')); // -> checks object's own properties 
console.log(student.display());
console.log(student.also());
console.log(student.getAge);
student.setRating = 12;
console.log(student);
//Prototyping - Inheriting
//Object -> Own Properties, Symbols, Inherited Properties 
const object = {
      hello : "world!",
      [Symbol('id')] : 0,
    __proto__: student
};
console.log(object.name);
console.log(Object.keys(object));
console.log(Object.values(object));
Object.entries(object).forEach(function(key, value) { //-> gives own properties
    console.log(key, value);
})
for (key in object) { //->gives inherited properties as well
    console.log(key, object[key]);
}
const newObj = {
    newName : "object",
};
Object.assign(newObj, object); //-> to copy parent properties without inheriting
console.log(newObj);
Object.freeze(object);
object.hello = "my world!";
console.log(object);
console.log(Object.isFrozen(object));
Object.seal(newObj);
newObj.newName = "newName";
console.log(newObj);
object.toString = function() {
    return "Hello!";
}
//not working!
object.valueOf = function() {
    return 2;
}
