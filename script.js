//created a new variable using moment.js's formating, and updated the innerHTML
//to get the date to populate in the header

//to test off-time
//let rightnow = moment('1:00pm', 'h:mma');
// let date = moment().format("MMM Do YY");



//creating a variable to allow the planner hours to be compared to the current time
let rightnow = moment();

//creating variables to connect the html to js
let rightnowString = rightnow.format("MMM Do YY hh:mm:ss a");
let element = document.getElementById("todaysDate")
element.innerHTML = rightnowString; 

//created timeslots in js with moment.js to populate times
let timeslots = [ 
    moment('9:00am', 'h:mma'),
    moment('10:00am', 'h:mma'),
    moment('11:00am', 'h:mma'),
    moment('12:00pm', 'h:mma'),
    moment('1:00pm', 'h:mma'),
    moment('2:00pm', 'h:mma'),
    moment('3:00pm', 'h:mma'),
    moment('4:00pm', 'h:mma'),
    moment('5:00pm', 'h:mma'),
];

timeslots.forEach(timeslot => {
    console.log(timeslot.format('h:mma'));
});

//created a for loop to format the time slots
for (var i = 0; i < timeslots.length - 1; i++) {
    let index = i + 1;
    let element = document.getElementById(`timeslot${index}`);
    element.innerHTML = timeslots[i].format('h:mma') + ' - ' + timeslots[i+1].format('h:mma'); 

    let rowelement = document.getElementById(`timerow${index}`);

    //created an if else statement to change the background color to grey if the time marked as before
    // or green for after now
    if (timeslots[i].isBefore(rightnow)) {
        rowelement.style.backgroundColor = 'lightgrey';
        console.log(timeslots[i].format("MMM Do YY hh:mm:ss a"));
        console.log(rightnow.format("MMM Do YY hh:mm:ss a"));
    }

    else if (timeslots[i].isAfter(rightnow)) {
        rowelement.style.backgroundColor = 'lightgreen';
    }

    //PROBLEM displaying current hour color
    else {
        rowelement.style.backgroundColor = 'lightblue';
    }
}

//created variable, added an event listener, and created a function to save items on click to localStorage
let inputVar = document.getElementById("input")

let inputTextVar8 = document.getElementById("inputText8");
let inputTextVar1 = document.getElementById("inputText1");
let inputTextVar2 = document.getElementById("inputText2");
let inputTextVar3 = document.getElementById("inputText3");
let inputTextVar4 = document.getElementById("inputText4");
let inputTextVar5 = document.getElementById("inputText5");
let inputTextVar6 = document.getElementById("inputText6");
let inputTextVar7 = document.getElementById("inputText7");

let inputVar8 = document.getElementById("input8");
let inputVar1 = document.getElementById("input1");
let inputVar2 = document.getElementById("input2");
let inputVar3 = document.getElementById("input3");
let inputVar4 = document.getElementById("input4");
let inputVar5 = document.getElementById("input5");
let inputVar6 = document.getElementById("input6");
let inputVar7 = document.getElementById("input7");

let eventVar = "";

let saveButton = $(".saveBtn");
saveButton.on ("click", saveEvent);


function saveEvent() {

//adding to localStorage
    localStorage.setItem('storeObj', (inputTextVar8));
    localStorage.setItem('storeObj', (inputTextVar1));
    localStorage.setItem('storeObj', (inputTextVar2));
    localStorage.setItem('storeObj', (inputTextVar3));
    localStorage.setItem('storeObj', (inputTextVar4));
    localStorage.setItem('storeObj', (inputTextVar5));
    localStorage.setItem('storeObj', (inputTextVar6));
    localStorage.setItem('storeObj', (inputTextVar7));

//getting from localStorage
    var getObject = (localStorage.getItem('storeObj'));

    localStorage.getItem('storeObj' (inputVar8));
    localStorage.getItem('storeObj' (inputVar1));
    localStorage.getItem('storeObj' (inputVar2));
    localStorage.getItem('storeObj' (inputVar3));
    localStorage.getItem('storeObj' (inputVar4));
    localStorage.getItem('storeObj' (inputVar5));
    localStorage.getItem('storeObj' (inputVar6));
    localStorage.getItem('storeObj' (inputVar7));

    var value = inputTextVar.value;
    inputVar.innerText = (value + " " + getObject)    
   console.log (getObject);

}

    /*  // Store
    localStorage.setItem("event", "inputVar");
    // Retrieve
    document.getElementById("inputVar").innerHTML = localStorage.getItem("event");


    localStorage.setItem("key", "value");
//Syntax for READING data from localStorage:

var lastname = localStorage.getItem("key");
 */