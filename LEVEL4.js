// Array :- Linear Collection of Items of Same Data Type or Different Data Type

let marks = [55 , 85, 44, 65, 35]; // Creating of Array
console.log(marks);

console.log(" Length of the given array = " ,marks.length); // .length in array gives the number of Element

console.log(typeof marks); // typeof array is object as array is a type of object

// Array Indices(Array Index)
console.log(marks[2]); // They are used to access particular element in array
console.log(marks[5]); // It will give undefined because it is not yet decelared

// To change values in array as they are mutable
marks[2] = 55;
console.log(marks);

// Looping on a Array

let out = "";
for (let ind = 0 ; ind < marks.length ; ind++){
    out += marks[ind] + ",";
}
console.log(out);

// Practice 1

let stdMarks = [85 ,97 ,44 ,37 ,76 ,60];
let sum = 0;
for(let mark of stdMarks ){
    sum += mark;
}
console.log(`Average of the marks of student = ${sum / stdMarks.length}`);

// Practice 2

let price = [250 ,645 ,300 ,900 ,50];
for (let i = 0 ; i < price.length ; i++) {
    price[i] -= (price[i] * 10 / 100);
}
console.log(`Final Price of all product = ${price}`)

// Arrays Methods

let Items1 = ["Apple" ,"Orange" ,"Litchi" ,"Potato"];
let Items2 = ["Carrot" , "Cucumber"];
let Items3 = ["Almond" ,"Pista"];

Items1.push("Chips" , "Burger"); // .push method is used to add 1 or more element at the end in main array
console.log(Items1)

let pitem = Items1.pop(); // It delete elements from end in main array and return it in variable
console.log(Items1);
console.log("Deleted Item is ",pitem);

let newitems = Items1.toString(); // It convert array to string & return a new String
console.log(newitems);
console.log(typeof newitems);

let concatination = Items1.concat(Items2 , Items3); // .concat is used to add 1 or more array at end & return a new array
console.log(concatination);

Items1.unshift("Coconut" , "Mango"); // To add 1 or more element at start of the original array
console.log(Items1);

let delval = Items1.shift(); // .shift is used to remove element at start in original array & also return it
console.log(Items1);
console.log("Deleted Value from the Array is ",delval);

let arrslice = Items1.slice(2,5); // .slice(stridx , endidx) return the piece of string & return a new array 
console.log(arrslice); // endidx is exclusive
console.log(Items1.slice(3)); // If we don't specify the end it will make slice upto last element

let newarray = [1,2,3,4,5,6,7];
newarray.splice(2, 2, 98, 58); // .splice(stridx,delcount,newelement) It is used to add or remove data in same array
console.log(newarray);

// newarray.splice(5 ,0 ,9); To only add the element
// newarray.splice(2, 4); To only delete the element
// newarray.splice(2 ,1 ,7); To only replace the element
// newarray.splice(); If we do not specify any thing them it will do noting only return a empty array

let del_var = newarray.splice(5); // If we do specify only start index them it will delete the remaining values & give it
console.log(del_var);
console.log(newarray);

// Practice 3

let company = ["Bloomberg" ,"Microsoft" ,"Uber" ,"Google" ,"IBM" ,"Netfix"];

let del_company = company.shift();
console.log(`The Company which is deleted from array is ${del_company}`);
console.log("New Array after Deletion = ",company);

company.splice(1 ,1 ,"Ola");
console.log("Array after replacing Ola with Uber :",company);

company.push("Amazom");
console.log("After after adding Amazon at last :",company);