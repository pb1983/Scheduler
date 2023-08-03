// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//let calendarInfo = JSON.parse(localStorage.getItem("calendarInfo")) || [];


document.querySelector('textarea[data-time="9"]').value = localStorage.getItem("9")
document.querySelector('textarea[data-time="10"]').value = localStorage.getItem("10")
document.querySelector('textarea[data-time="11"]').value = localStorage.getItem("11")
document.querySelector('textarea[data-time="12"]').value = localStorage.getItem("12")
document.querySelector('textarea[data-time="1"]').value = localStorage.getItem("1")
document.querySelector('textarea[data-time="2"]').value = localStorage.getItem("2")
document.querySelector('textarea[data-time="3"]').value = localStorage.getItem("3")
document.querySelector('textarea[data-time="4"]').value = localStorage.getItem("4")
document.querySelector('textarea[data-time="5"]').value = localStorage.getItem("5")



let saveButton = $(".saveBtn");



saveButton.on("click", function(event) {
  if (event.target.matches("button"))  {
    
    localStorage.setItem(this.dataset.time, this.previousElementSibling.value);

  } else if (event.target.matches("i")) {
    localStorage.setItem(this.dataset.time, this.previousElementSibling.value);

    // let userInput = this.previousElementSibling.value;
    // let dataNumber = this.dataset.time;


    //calendarInfo.push(userInput, dataNumber);
    //localStorage.setItem("calendarInfo", JSON.stringify(calendarInfo))
  }
})



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
