// .js is the extension of a Javascript File
// Before running JS on browser we want to create a html file

console.log("Hello Everyone Welcome to my JS!"); // console.log() is used to print message in the console
console.log("My Name is Rajat Agarwal");
console.log("I Love JS!");

// Variables : They are the container for the data  
// Syntax : variable_name = value

fullname = "Rajat Agarwal";
age = 15;
total_amt = 555.66;
any = null;  // In JS null means nothing . Iska means pata to ha par empty value hai
nothing = undefined;  // undefined ka means pata hi nahi isme kya hai
isFollow = false;  // Boolean value - It can only be true or false

age = "Rajat";  // JS is dynamically typed language. Dynamically means after running JS it's interpreter itself identify the type of value.
// That's why we can store any type of value in any variable because data type is not defined earlier

console.log(fullname);
console.log(age);
console.log(total_amt);
console.log(any);
console.log(nothing);
console.log(isFollow);

// Rule to declare a Variable

// 1. Variable are case sensetive : It means 'A' & 'a' are different

firstname = "Rajat";
FIRSTNAME = "Agarwal";

console.log(firstname);
console.log(FIRSTNAME);

// 2. Only number,digit,$,_ are allowed (not even space)

nickname = "raj"; // Valid
nick_name = "raj"; // Valid
nick$name = "raj"; // Valid
nickn2ame = "raj"; // Valid
// nick name = "raj";  Not Valid

// 3. Only letter,_,$ should be 1st character

anoname = "Rajan";  // Valid
$anoname = "Rajan";  // Valid
_anoname = "Rajan";  // Valid
// 123anoname = "Rajan";  Invalid

// 4. Keywords cannot be used as Variable Name

// console = 55; Invalid
Console = 55; // Valid

// Ways to declare a variable

// 1. Using var keywords :- In this variable can be redeclared & update

var age = 24;
var age = 54;
var age = 86;

console.log(age);

// 2. Using let keywords :- In this variable cannot be redeclare but can be updated

let ace = 24;
// let ace = 54;
console.log(ace);
ace = 96
console.log(ace);

// 3. Using const keywords :- In this variable cannot be redeclare & updated

const PI = 3.14;
// year = 66;
console.log(PI);

// Declaration of Variable

let a;
console.log(a);

// const b; Const declaration must be initialized otherwise it will give error

// Data Types in JS

// Primitive Data Types :- There are 7 Primitive Data Types in JS

// 1. Number

let ac = 15;
let ca = -88.55;
console.log(typeof ac);  // typeof is used to find the data type

// 2. String

let usname = "Ravians";
console.log(typeof usname);

// 3. Boolean

let isPart = false;
console.log(typeof isPart);

// 4. Undefined :- By default every variable is undefined until value is not assigned to it

let anyth;
console.log(typeof anyth);

// 5. Null :- It means absence of object

let num = null;
console.log(num);
console.log(typeof num);

// 6. BigInt :- In output at the end of BigInt there will be a n character

let x = BigInt("452");
console.log(x); // 452n
console.log(typeof x);

// 7. Symbol

let greet = Symbol("Hello World!")
console.log(greet);
console.log(typeof greet);

// Non Primitive Data Type :- Data Types that are derived from primitive data types

// 1. Objects :- Collection of values. It stores values as Key:Value Pair. Generally objects are created using const but can be form by using let

const student = {
    studname : "Raj Kumar",
    age : 20,
    CGPA : 8.52,
    isPass : true   
};
console.log(student);
console.log(typeof student);

// To access value using Keys in Objects
console.log(student["age"]);  // Method 1
console.log(student.age);  // Methid 2

// To Update Value in Objects
student["CGPA"] = student["CGPA"] + 55;
console.log(student.CGPA);

student.studname = "Rajat Agarwal";
console.log(student.studname);

// #KKM

let anyname = "Rudr";
let birthname = anyname + "a Agarwal" + 12;  // If we add a number with string it will also become string
console.log(birthname);

// We can't make changes in const variables but changes can be done in keys of const object

// Practice 1       

const product = {
    prodname : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270,
    isDeal : true
};

console.log(product);

// Practice 2

const profile = {
    username : "@RajatAgarwal",
    isFollow : true,
    followers : 565,
    following : 55
};

console.log(profile);
console.log(typeof profile);
console.log(typeof profile.username);