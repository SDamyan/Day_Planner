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

    //created an if else if statement to change the background color to grey if the time marked as present is before
    // or blue for after now
    if (timeslots[i].isBefore(rightnow)) {
        rowelement.style.backgroundColor = 'lightgrey';
        console.log('element is grey');
        console.log(timeslots[i].format("MMM Do YY hh:mm:ss a"));
        console.log(rightnow.format("MMM Do YY hh:mm:ss a"));
    }
    else if (timeslots[i].isAfter(rightnow)) {
        rowelement.style.backgroundColor = 'lightgreen';
    }
}


//created variable, added an event listener, and created a function to save items on click to localStorage
let inputVar = document.getElementById("input")
let inputTextVar = document.getElementById("inputText")
let eventVar = "";

let saveButton = document.getElementById("saveBtn");
saveButton.addEventListener ("click", saveEvent);


function saveEvent() {

//adding to localStorage
    localStorage.setItem('storeObj', (eventVar));

//getting from localStorage
    var getObject = (localStorage.getItem('storeObj'));
    var value = inputTextVar.value;
    inputVar.innerText = (value + " " + getObject)    
   console.log (storeObj);
}

    /*  // Store
    localStorage.setItem("event", "inputVar");
    // Retrieve
    document.getElementById("inputVar").innerHTML = localStorage.getItem("event");


    localStorage.setItem("key", "value");
//Syntax for READING data from localStorage:

var lastname = localStorage.getItem("key");
 */