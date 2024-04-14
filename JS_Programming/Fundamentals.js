//Objects
const student = {
    name: "Saathwika",
    regNo: "22b01a0536", 
};
console.log(student) //{ name: 'Saathwika', regNo: '22b01a0536' }
console.log(JSON.stringify(student)); //{"name":"Saathwika","regNo":"22b01a0536"}
//console.log(JSON.parse(student));
console.log(student.name, student.regNo); //Saathwika 22b01a0536
student.name = "bhaskar";
console.log(student.name); //bhaskar
//Map
const map = new Map();
map.set("saathwika", "bhaskar");
console.log(map); //Map(1) { 'saathwika' => 'bhaskar' }
console.log(map.get("saathwika"), map.get("bhaskar")); //bhaskar undefined
//Set
const set = new Set();
set.add(123);
console.log(set); //Set(1) { 123 }
console.log(set.has("hello")); //false
set.add("hello"); 
console.log(set); //Set(2) { 123, 'hello' }
console.log(set.delete(123)); //true
console.log(set); //Set(1) { 'hello' }
//Functions
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5)); //7

function callFunc(func, param) {
    return func(param);
}
console.log(callFunc(addTwo, 10)); //12
//Looping
for (let i = 0; i < 6; i++){
    if (i == 2){
        continue;
    }
    if (i == 4) {
        break;
    }
    console.log(i);
}
let j = 0;
while (j < 2){
    console.log(j);
    j++;
}
console.log("do-while");
do{
    console.log(j);
    j++;
}while(j < 5);
for (const value of [1, 2, 3]) {
    console.log(value);
}
for (const value of 'acbc') {
    console.log(value);
}
for (const key in student) {
    console.log(key, student[key]);
}
const condition = true;
// condition = false, null
if (condition) {
    console.log("Boolean True");
}
else{
    console.log("Boolean False");
}
const value = 10;
switch(value) {
    case 1:
        console.log("It was 1");
        break
    case 5:
        console.log("It was 5");
        break
    default:
        console.log("It was default");
}
console.log(value % 2 == 0 ? "Even" : "Odd" );