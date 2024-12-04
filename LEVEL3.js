// Loops in JS : They are used to repeat a statement multiple times

// 1. for loop : for(initialisation,condition,updtation){ Statement to be executed }

let start;
for (start = 0; start < 5; start++) {
    console.log("This loop is executed ",start + 1,"times");
}

// Calculate sum of n numbers

let sum = 0;
let n = 100;
for (let i = 0; i <= n; i++) {
    sum += i;
}
console.log("Sum of number till n = ",sum);
// console.log(i); It will give error because let have block scope & it is valid upto loop

// 2. Infinite Loop : A Loop that never ends & it is always when stopping condition of loop always give true

// 3. While Loop : while(condition){ Statement & Updationatlast}

console.log("To print number till specified n");
let i = 1;
let output = "";
while (i <= 5) {
    output += i + " ";
    i++;
}
console.log(output);

// 4. do-while loop : do{ Statement to be executed }while(condition);
// It works sames as while loop difference is that condition in do-while loop is checked at the end. That's why it runs at least once

let num = 20;
do {
    console.log("Practising do-while loop");
    i++;
} while (num <= 10);

console.log("Printing n number using do-while loop")
let inst = 1;
let out = "";
do {
    out += inst + " ";
    inst++;
} while (inst <= 5);
console.log(out);

// for-of Loop : They are used to put loop on some special data type(Strings & Array)
// Syntax : for(let variable of data_variable){ do some work } After it variable will get character of data type one by one

let str = "JS Tutuorial";
let op = "";
let size = 0;
for (let alp of str) {
    op += alp + ",";
    size ++;
}
console.log(op);
console.log("Size of String = ",size);

// for-in Loop : They are used to put loop on some special data type(Objects & Arrays)
// Syntax : for(let variable in data_variable){ do some work } After it variable will get keys of object

const student = {
    stdname : "Rajesh Kumar",
    age : 20,
    cgpa : 8,
    isPass : true,
}

let oup = "";
let val = "";
for (let key in student){
    oup += key + ",";
    val += student[key] + ","; // We cannot make "" because key is variable & it try to find exactly it which is not possible
}
console.log(oup);
console.log(val);

// Practice 1

let number = "";
for (let stnum = 0 ; stnum <= 100 ; stnum++ ){

    if(stnum % 2 == "0"){
        number += stnum + ",";
    }
}
console.log("Even Number between 1 to 100 ",number);

// Practice 2

let gamenum = Math.floor(Math.random() * 10); // math.random fxn generate random number between 0 to 1
while (true) {
    let gussnum = prompt("Please Guess the number between 0 & 10 "); // prompt give number as string
    if (gussnum == gamenum) {
        alert("You won the Game");
        break;
    }else{
        alert("Opps!,Try Again")
    }
}

// Strings in JS

let str1 = "My Name is RJ Coder"; // Creating the string
let str2 = "Welcome to my JS Tutorial"; 

let length = str1.length; // variable_name.length is used to find total characters in string
console.log("Length of String = ",length)

console.log(str1["12"]); // To access individual character

// Template Literals in JS : It is used to embedded expression in string
// String Interpolation : Making of using placeholder `String_do_be_display ${variable_name or expression}`

let object = {
    price : 55,
    item : "Pen"                                    
}

console.log(`The cost of ${object["item"]} is ${object["price"] + 8} rupees`);

// Escape Character

console.log("My Self Rajat \nThis is my JS Tutorial"); // \n is used to add a new line between strings

let stri = "My Self Rajat \tThis is my JS Tutorial"
console.log(stri); // \n is used to add a tag space between strings
console.log(stri.length); // While counting the character it will count both \ & t as 1 character

// Strings Methods in JS : They are built in fxn to make changes in strings

let samstr = "Jai Mahakal Mahadev Ji Ki Jai";
let samstr2 = " Har Har Mahadev";
// Strings methods are not applied on original string it returns a new value as strings are immutable

console.log(samstr.toUpperCase()); // .toUpperCase fxn convert all character in Upper Case
console.log(samstr.toLowerCase()); // .toLowerCase fxn convert all character in Lower Case
console.log(samstr.trim()); // .toUpperCase fxn is used to remove all white spaces from start & end only

console.log(samstr.slice(4,12)); // .slice fxn return part of the string & start is inclusive & end is exclusive    
console.log(samstr.slice(12)); // If end is not specified then it will print upto last

console.log(samstr.concat(samstr2)); // .concat is used for Concatnation & It is used to join 2 strings
console.log(samstr + samstr2); // Concatnation is normally done using + symbol

samstr[0] = 'H';
console.log(samstr); // There will be no change in original one as strings are immutable
console.log(samstr2.replace("Har","Jai")); // .replace is used to replace character with another & it will be done once 
console.log(samstr2.replaceAll("Har","Jai")); // .replaceAll is used to replace all character with another 

console.log(samstr2.charAt(4)); // .charAt() is used to find character at particular index

// Practice 3

let usfullname = prompt("Please Enter the Full Name of User");
let newname = `@${usfullname}${usfullname.length}`; // or it can be "@" + usfullname + usfullname.length
console.log(newname);