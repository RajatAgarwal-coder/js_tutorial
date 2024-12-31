// Window Object :- It is a open window in browser. It is browser object & created by browser itself
// It is a global object with lots os properties & methods

window.console.log("As console.log is a part of window object");
console.log(window);

// Document Object Model DOM
/* Entire HTML code we can access in JS as all HTML elements will automatically converted into object in javascript
and the that special object is called document and this document is available in document object */

console.dir(window.document); // console.dir is used to print properties and methods of special object like document object

// Accessing html elements

console.dir(window.document.body);
console.log(window.document.body);

console.log(window.document.body.childNodes[1]); // To print child nodes of html

// Different Ways of DOM Manipulation

// 1. Selection with Id :- document.getElementById("id_name")

let para1 = document.getElementById("sel_id");
console.log(para1);
// When given id element does not exist than it will return null

// 2. Selection with Class :- document.getElementsByClassName("class_name")

let para2 = document.getElementsByClassName("sel_class");
console.log(para2); // It return HTML collection which is similar to array
// When given class element does not exist than it will return empty html collection

// 3. Selection with Tag Name :- document.getElementsByTagName("tag_name")

let parahs = document.getElementsByTagName("p");
console.log(parahs);

// 4. Query Selector :- document.querySelector("id_name / class_name / tag_name");

let query1 = document.querySelector("p"); // It will return the first matching element
console.log(query1);

let query2 = document.querySelectorAll("div"); // It will return all the matching element
console.log(query2); // It will return Node List

// Selected element getting & properties change

// 1. tagname :- It return the tag name

console.log(document.getElementById("sel_id").tagName);

// 2. innerText :- It return the text content of the element and its children. It contain only textual content

let doc = document.getElementById("fruit");
console.log(doc.innerText);

// To change text inside the id fruit
doc.innerText = "This text has been changed"

// 3. innerHTML :- It return the html content of the element and its children. It also return html content

console.log(doc.innerHTML);

// To change html inside the id fruit
doc.innerHTML = "<div> <i>This is changed div by innerHTML</i> </div>"

// 4. tectContent :- It works same as innerText but it also give the text of hidden elemets

let hid = document.getElementById("hidden");
console.log(hid.textContent)

// Practice 1

let elem = document.getElementById("hel");
elem.innerText += " from Apna College Student "

// Practice 2

let divs = document.querySelectorAll(".box");

let idx = 1;
for (const div of divs) {
    div.innerText = `Changed content in Div ${idx}`;
    idx ++;
}

// DOM Attribute

// 1. getAttribute(attr) to get the specified attribute value

let atrdom = document.querySelector("#domatr");

let val_in_id = atrdom.getAttribute("id");
console.log("Value od id attribute in div =",val_in_id);

let val_in_style = atrdom.getAttribute("style");
console.log("Value od id attribute in div =",val_in_style);

// 2. setAttribute(attr , val) to get the attribute value

let id_change = atrdom.setAttribute("id","newid");

// DOM Style : To change the style we can also change it using setAttribute
// Syntax : node.style.propertyToBeChanged = "value"; CSS writen in JS is Consider in inline styling
// In CSS it is font-size and in JS it is fontSize and similarly applied

atrdom.style.fontSize = "50px";
atrdom.style.backgroundColor = "Black";

// Inserting Element

// To insert any element we have to create it
let el1 = document.createElement("button");
el1.innerText = "Click Me";

let el2 = document.createElement("p");
el2.innerText = "This is paragraph in which we have inserted it using DOM";

let el3 = document.createElement("h3");
el3.innerText = "This is Starting of DIV";

let el4 = document.createElement("p");
el4.innerText = "This is Ending of DIV";

let elediv = document.querySelector("#insetele");

// 1. node.append(el) adds the end of node(inside)

elediv.append(el1);

// 2. node.prepend(el) adds the start of node(inside)

elediv.prepend(el2);

// 3. node.before(el) adds before the node(outside)

elediv.before(el3);

// 4. node.after(el) adds after the node(outside)

elediv.after(el4);

// Deleting Node - node.remove()

let delPara = document.querySelector("#delPara");
el4.remove();

// Practice 3

let buttonElement = document.createElement("button");

buttonElement.innerText = "Click Me";
buttonElement.style.backgroundColor = "Red";
buttonElement.style.color = "White";

let bodyele = document.querySelector("body");
bodyele.prepend(buttonElement);

// Practice 4

let para = document.querySelector(".paraClass");
// para.setAttribute("class","newClass") Due to this present class is overwritten which should not happen

para.classList.add("newClass")
// To add or remove class we use Class List