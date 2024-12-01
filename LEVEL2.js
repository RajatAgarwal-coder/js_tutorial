// Comments : Part of the code that is not executed

// Single Line Comment in JS

/*
Multi Lines Comments in JS
*/

// Operators : This are the operators that are used to perform operation on operands

// 1. Arithmetic Operator

let a = 10;
let b = 2;

// They are Binary Operator as they works on 2 operand

console.log("Addition Operator = ",a + b );
console.log("Subtraction Operator = ",a - b );
console.log("Multiplication Operator = ",a * b );
console.log("Division Operator = ",a / b );
console.log("Modulus Operator = ",a % b);  // It gives the remainder after division
console.log("Exponentiation Operator = ",a ** b);  // It means a ^ b

// They are Unary Operators as they works on 1 operands 

console.log("Post Increment Operator = ",a++);  // Use the value and add after it. a++ --> a = a + 1
console.log("Post Decrement Operator = ",a--);  // Use the value and sub after it. a-- --> a = a - 1
console.log("Pre Increment Operator = ",++a);  // Add the value and use after it. ++a --> a = a + 1
console.log("Pre Decrement Operator = ",--a);  // Sub the value and use after it. --a --> a = a - 1

// 2. Assignment Operator : They are used to assign a value to a variable

// i. = Operator
let ab = 5;  // Here value 5 is assigned to variable ab
let ba = 2;

// ii. += Operator
ab += 10; // ab = ab + 10
console.log(ab);

// iii. -= Operator
ab -= 10; // ab = ab - 10
console.log(ab);

// iv. *= Operator
ab *= 10; // ab = ab * 5
console.log(ab);

// v. /= Operator
ab /= 2; // ab = ab / 5
console.log(ab);

// vi. %= Operator
ab %= 10; // ab = ab % 5
console.log(ab);

// vii. **= Operator
ab **= 3; // ab = ab ** 5
console.log(ab);

// 3. Comparison Operator : It used to compare 2 values & it gives result as boolean

let num1 = 5;
let num2 = "8";  // StringWithOnlyNumber -----> Number (Implicit) 

console.log("== Operator : ", num1 == num2);
console.log("!= Operator : ", num1 != num2);
console.log("=== Operator : ", num1 === num2); // Equal to & type : It also check data type for us
console.log("!== Operator : ", num1 !== num2); // Not Equal to & type : It also check data type for us

console.log("> Operator : ", num1 > num2);
console.log("< Operator : ", num1 < num2);
console.log(">= Operator : ", num1 >= num2);
console.log("<= Operator : ", num1 <= num2);

// 4. Logical Operator : Used to compare 2 condition & also result as boolean

let cond1 = num1 > num2; // false
let cond2 = num1 != num2; // true

console.log("Logical && AND Operator : ", cond1 && cond2); // Gives true only when both condition are true
console.log("Logical || OR Operator : ", cond1 || cond2); // Gives true when any 1 condition is true
console.log("Logical ! NOT Operator : ", ! cond1); // It reverses the boolean value & applied on 1 condition

// Conditional Statement : Used to impelement condition in code

// 1. if statement : Syntax - if(condition) { Statement to be executed }

let age = 55;

if (age >= "18") {
    console.log("You are eligible for driving lisence")
}

// Single Line if statement : It only work when we have to perform only 1 work after condition is true

if (age < "18") console.log("You are not eligible for driving lisence");

// 2. if-else statement : 
/*Syntax - if(condition){
                 Statement to be executed 
           }else{
                 Statement to be executed
           }  else block will be executed only when condition in if block is false*/

if (age >= "18") {
    console.log("You can Vote");
}else{
    console.log("You cannot Vote"); // else cannot be written without if statement
}

// else if statement : Used to check more than 2 condition
/*Syntax - if(condition){
                 Statement to be executed 
           }else if(condition){
                 Statement to be executed           
           }
           }else{
                 Statement to be executed
           }*/

if (age <= "18") {
    console.log("You are Teenager");
}else if (age <= 60){
    console.log("You are Adult"); 
}else{
    console.log("You are Senior Citizen");
}

// Ternary Operator : This operator is simple form of if else
// Syntax :  condition ? true output : false output ;

let ismarried = false;
ismarried ? console.log("You are Married") : console.log("You are not Married");

// Input & Output

alert("Namaste! Welcome to my Code base");  // Alert is used to show one time POP-UP

let usname = prompt("Please Enter Your Name");  // Prompt is used to input value from user
console.log("Your Entered Name =",usname);

// Practice 1

let usernum = prompt("Please Enter a number to check it is divisible by 5 or not : ");
if (usernum % 5 === 0) {
    console.log(usernum,"is a multiple of 5");
}else{
    console.log(usernum,"is not a multiple of 5");
}

// Practice 2

let grade;
let score = prompt("Enter your marks to calculate your grades (0-100) :");
if(score >= 90 && score <= 100){
    grade = "A";
}else if(score >= 70 && score <= 89){
    grade = "B";
}else if(score >= 60 && score <= 69){
    grade = "C";
}else if(score >= 50 && score <= 59){
    grade = "D";
}else if(score >= 0 && score <= 49){
    grade = "E";
}
// else statement can be skipped

console.log("Your Grades according to marks =",grade);