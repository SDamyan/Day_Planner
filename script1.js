/* //created a new variable using moment.js's formating, and updated the innerHTML
//to get the date to populate in the header
let date = moment().format("MMM Do YY");
let element = document.getElementById("todaysDate")
element.innerHTML = date

//created variable, added an event listener, and created a function to save items on click to localStorage
let saveButton = document.getElementById("saveBtn");
saveButton.addEventListener ("click", saveEvent);

function saveEvent() {
    window.localStorage.setItem("inputText")
} */