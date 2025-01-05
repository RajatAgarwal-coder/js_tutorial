// Classes & Objects

// Prototype in JS
// JS Objects that can contain state & behavior i.e. methods & variables

const student = {
    fullName : "Rajat Agarwal",
    marks : 85.54,
    printMarks() {  // We can also use Arrow fxn in place of it
        console.log("Your Marks is ", this.marks); // student.marks
    }
}
// this keyword :- jis chij ki ham baat kar rahe hai
// Every JS object has a unique property called Prototype

let fruits = ["Apple" , "Banana" , "Mango"]; // Array is also consider as a objeect
fruits.push("Lichi"); // This types of methods are come from Prototype Object

// To set Prototype we can use .__proto__ 

const employeetax = {

    calcTax() {
        console.log("Tax is 10%");
    }
}

const karan = {
    salary: 50000,
    calcTax() {
        console.log("Tax is 20%"); // Method in the object itself
    }
}

karan.__proto__ = employeetax;

karan.calcTax(); // If object and prototype have same fxn then objects fxn will be executed

// Classes :- When we have to create multiply similar objects we use classes
// Classes gives the templete for creating objects
// Syntax :- class myClass { constructor() {} myMethods() {}}
// To create Object :- let myObj = new myClass();

class toyotaCar{

    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new toyotaCar();
console.log(fortuner);
console.log(typeof fortuner);
fortuner.start();
fortuner.stop();
fortuner.setBrand("Fortuner");

let lexus = new toyotaCar();
console.log(lexus);
lexus.setBrand("Lexus");

// Constructor in Class :- When any new object is created then firstly constructor is called
// This is automatically invoked by new keyword when we create new object using class without constructor

class studentInfo {

    constructor(school , stdclass) {
        console.log(`Creating New Objects`)
        this.School = school;
        this.Class = stdclass;
    }

    studentName(name) {
        console.log("Name of Student = ",name);
    }

}

let stdifo1 = new studentInfo("St Johns School" , "12th"); // constructor
console.log(stdifo1);
stdifo1.studentName("Rajat Agarwal");

// Inheritance :- To use properties/methods of one class(parent) in another class(child)
// Child class extend its parent class
// Child class is also called as derived class  

class Person {

    constructor(name){
        console.log("Enter the Parent Constructor")
        this.species = "Home Sapiens"
        this.name = name;
    }
    
    eat() {
        console.log("The Person is Eating");
    }

    sleep() {
        console.log("The Person is Sleeping")
    }

    work() {
        console.log("This Person do noting")
    }
}

// Super Keyword :- It is used to called Parent Constructor & to access its properties/method

class Engineer extends Person {

    constructor(name , branch) {

        console.log("Enter in the child Constructor")
        super(name); //to invoke parent class constructor
        this.branch = branch;
        console.log("Exit the child Constructor")
    }

    work() {
        super.eat();
        console.log("Person is Solving Problem")
    }
}

let rajat = new Engineer("Rajat Agarwal" ,"Computer Science Engineer");
console.log("Person 1 is ",rajat)
console.log("Name of Person 1 is ",rajat.name)
rajat.eat();
rajat.sleep();
rajat.work(); // If parent and child class has same fxn then child class fxn will be use this is called Method Overriding
console.log(rajat.branch)

// Practice 1

class User {

    constructor (name,email) {
        this.name = name;
        this.email = email;
    }

    viewData () {
        console.log("Name of the Student is ",this.name);
        console.log("Email of Student is ",this.email);
    }

}

let student1 = new User("Rajat Agarwal" , "rajatagarwal061207@gmail.com");
student1.viewData();

let teacher1 = new User("Hemraj Kumavat " , "hemraj123@gmail.com");
teacher1.viewData();

// Practice 2

class Admin extends User {

    constructor(name , email) {
        super(name , email);
    }

    editData(User , newname , newemail){
        User.name = newname;
        User.email = newemail;
    }

}

let admin1 = new Admin("Rajat" , "rajat061207@gamil.com");

admin1.editData(student1 , "Updated Rajat" , "Updatedrajatagarwal061207@gmail.com")
student1.viewData();

// If we have error in the program it stop the execution from that line it self 
// Error Handling :- It is used to solve error in the program and remain progam will execute as it is 
// try-catch block

let a = 5;
let b = 10;

console.log(a+b);

try {
    console.log(a + c);
}

catch (error) {
    console.log(`${error} error has been generated`);
}