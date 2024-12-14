// Function in JS :- Block of code that can be evoked any whenever needed
// They protect us Redundancy (repeating things)

// 1. Pre-Defined Function :- They are already written in programming language

console.log("It is the LEVEL5 of JS Tutorial");
"js tutorial".toUpperCase();
[1,2,3].push(4);

// 2. User defined Function :- This are made by the programmer acc. to the need

/* Function Defination
function function_name(parameter_1 ,parameter_2....){ 
    Function Parameter --> Local variable of Function --> Block Scope
    // do some work
} */

/*/ Function Call / Invoke
function_name(argument_1 ,argument_2....);*/

// Output does not based on input
function myfun(){
    console.log("This is a Statement in the function");
    console.log("We are Learning JS :)");
}

myfun(); // Function will not execute until we Call it

// Output based on input
function message(msg){ // Parameter : It is a variable which is used in function defination
    console.log(msg * 5); // Give Nan(Not a number  ) 
}

message("Get Ready for the Blast" , 5); // Argument : it is the value which is passed in function call

function sum(num1 ,num2){
    two_sum = num1 + num2;
    console.log("Statement written before retun statement")
    return two_sum; // It will terminate the program & pass value to the function call(It will pass only 1 value)
    console.log("Statement written after retun statement")
}

let ret_num = sum(88,61);
console.log("Sum of 2 Number using return statement =",ret_num);

/* Arrow Function --> Compact way of writing a function
 Syntax :- const Fxn_name = (para_1 ,para_2) => {
                // do some work
                }*/

let multi_arrow = (num1 ,num2) => {
    return num1 * num2;
}  

let multi = multi_arrow(8 ,9);
console.log("Multiplication of 2 numbers =",multi);

// multi_arrow is a variable that stores the value but currently it is storing function

multi_arrow = 25;
console.log("Value in Arrow Function =",multi_arrow)

const show_hello = () => console.log("Hello World"); // For single line of code we can skip the {}
show_hello();

// Practice 1

function num_of_vovels(str){
    let count = 0;

    for (const vo of str) {
        
        let char = vo.toUpperCase();
        if (char == "A" || char == "E"|| char == "I" || char == "O" || char == "U") {
            count ++;
        }
    }

    console.log("Number of Vovels in the given Word =", count);
}

num_of_vovels("My JS Tutorial");

// Practice 2

const vowels_count = (str) => {
    let count = 0;

    for (const vo of str) {
        
        let char = vo.toUpperCase();
        if (char == "A" || char == "E"|| char == "I" || char == "O" || char == "U") {
            count ++;
        }
    }

    console.log("Number of Vovels in the given Word =", count);
}

vowels_count("I hope you are enjoying it");

// #KKM

// When any fxn is associated with a object then it is called Method like toUppercase can be used only for strings
// In JS fxn can passed as parameters & can also return value

function abc(){
    console.log("Hello !");
}

function myfun(abc) {
    return abc;
}

// Callback fxn :- Function which is passed as an argumet to another function
// High Order fxn/method :- Which take another fxn as parameter or return any fxn

// forEach Function in Arrays : It is also a method. In this call back fxn will be executed for each value of array. It is HOM
// Syntax : arr.forEach(callback fxn (val)) { do some work }

let arr = [52 ,56 ,89 ,85 ,62];

arr.forEach(function printval(val){ // val will get the each element of array line wise
    console.log(val);   
})

// In Arrow Function

let Arrays = ["Pune" ,"Delhi" ,"Mumbai"] 

Arrays.forEach((val) => {
    console.log(val.toUpperCase());
})

// WE can use 3 parameters in forEach loop :- value ,index ,array_itself

Arrays.forEach( (val ,index ,array ) => {
    console.log(val ,index ,array)
})

// Practice 3

let numarr = [1, 2, 3, 4, 5, 6];

numarr.forEach( (number) => {
    console.log(number ** 2);
})

// Array Methods

// 1. Map method :- It work same as forEach method but only difference is that it return a new array
// Syntax :- let new_array = oldarray.map( (val ,index ,array) => { Do some work })

let num_arr = [85 ,68 ,43 ,26 ,54];

let newnumarr = num_arr.map( (elem ,idx) => {
    return num_arr[idx] % 2; 
})

console.log("New Array of Element using Map Method =", newnumarr);

// 2. Filter :- Gives a new array of element by filtering the elements on given condition

let name_arr = ["Rajat" ,"Harsh" ,"Bhavesh" ,"Tushar"];

let filter_array = name_arr.filter( (names) => {
    return names.length <= 5;
})

console.log("Array with name of length ",filter_array)

// 3. Reduce :- It is used when we result into single value after operation on array. It return single value
// Syntax :- const var = arr.reduce((reult ,current value){ do some work })

let arr_ele = [11 ,22 ,33 ,44 ,55];

const sumofele = arr_ele.reduce( (result ,current_value) => {
    result += current_value;
    return result
})

console.log("Average of Given Value =",sumofele/arr_ele.length)

// Practice 4

let marks = [55, 25, 92, 82, 45, 62, 91];

let toppers = marks.filter( (mark_ele) => {
    return mark_ele > 90;
})

console.log("Array of marks of student that scored more than 90 marks :",toppers);

let user_num = prompt("Enter the Number of elements in the array");
let user_arr = [];
let num = 0;

while (num < user_num) {
    user_arr[num] = num + 1;
    num ++;
}
console.log(user_arr);

let sumarr = user_arr.reduce ((res ,cur) => {
    return res += cur ;
})

console.log("Sum of all the Elements of Array =",sumarr);

let multiarr = user_arr.reduce ((pre ,cur) => {
    return pre *= cur ;
})

console.log("Multiplication of all the Elements of Array =",multiarr);