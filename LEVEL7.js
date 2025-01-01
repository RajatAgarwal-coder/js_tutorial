// Events in JS :- Changes in the state of object
// Syntax :- node.eventName = () => { // handle here }

let a = 0;
let extev_1 = document.querySelector("#extev_1");

extev_1.onclick = () => {
    console.log("User has clicked the Button in External Handling")
    a++;
    console.log(a)
}

let extev_2 = document.querySelector("#extev_2");

extev_2.onmouseover = () => {
    console.log("The Cursor is inside the div box in External Handling")
}

// When we define both External & Internal Handling priority is given to External Handling
// When we perform 2 or more events on 1 node the last event will be executed

// Events Object :- It is the special object which has detalis about Event
// Syntax :- node.event = (eventObject) => { handle here }

let eveObj = document.querySelector("#evobj");

eveObj.onmouseover = (eventObject) => {
    console.log(eventObject); // To print Event Object
    console.log(eventObject.type);  // On which type event does occur
    console.log(eventObject.target); // On which element it is applied
    console.log(eventObject.clientX , eventObject.clientY);
    // ClientX - In horizontally where our event has been occured
    // ClientY - In vertical where our event has been occured
}

// Event Listener :- They are used dd many event handlers to one element.
// In this event prefix on is not applied

let eventList = document.querySelector("#evelist");

// To add Event Listener node.addEventListener("event" , "Function")

const eventFxn1 = () => {
    console.log("Cursor in Inside the box of event Listener has been clicked");
}

eventList.addEventListener("click",eventFxn1)

const eventFxn2 = () => {
    console.log("Cursor in Inside the box of event Listener - Handler1");
}

eventList.addEventListener("mouseover",eventFxn2)

const eventFxn3 = () => {
    console.log("Cursor in Inside the box of event Listener - Handler2");
}

eventList.addEventListener("mouseover",eventFxn3)

// To remove Event Listener node.removeEventListener("event" , "Function")

eventList.removeEventListener("mouseover" , eventFxn3);

// We has made fxn as different variable because it should remove the value from fxn which should point towards same memory location

// Practice 1

let modeBtn = document.querySelector("#toogleBtn");
let currentMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {

    if (currentMode === "light") {
        currentMode = "dark";

        body.classList.add("dark")

    } else {
        currentMode = "light"
        
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log(currentMode)
})


// Self Thinking

let ModeBtn = document.querySelector("#modes");
let currMode = "light";
let htmlbody = document.querySelector("body");

ModeBtn.addEventListener("click", () => {

    if (currMode === "light") {
        currMode = "dark";

        htmlbody.classList.add("dark")
        ModeBtn.innerText = "Switch to Light Mode";

    } else {
        currMode = "light"
        
        htmlbody.classList.remove("dark");
        htmlbody.classList.add("light");

        ModeBtn.innerText = "Switch to Dark Mode";

    }
    console.log(currMode)
})