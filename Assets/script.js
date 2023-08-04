
let past = document.getElementsByClassName(".past");
let present = document.getElementsByClassName(".present");
let future = document.getElementsByClassName(".future");
let currentHour = dayjs().hour();
let hourTracker = document.querySelectorAll(".row");
let saveButton = document.querySelectorAll(".saveBtn")



//Keeps items in local storage to corresponding text boxes 

document.querySelector('textarea[data-time="9"]').value = localStorage.getItem("9")
document.querySelector('textarea[data-time="10"]').value = localStorage.getItem("10")
document.querySelector('textarea[data-time="11"]').value = localStorage.getItem("11")
document.querySelector('textarea[data-time="12"]').value = localStorage.getItem("12")
document.querySelector('textarea[data-time="13"]').value = localStorage.getItem("13")
document.querySelector('textarea[data-time="14"]').value = localStorage.getItem("14")
document.querySelector('textarea[data-time="15"]').value = localStorage.getItem("15")
document.querySelector('textarea[data-time="16"]').value = localStorage.getItem("16")
document.querySelector('textarea[data-time="17"]').value = localStorage.getItem("17")



//Date and running clock

function runningClock() {

  let ticker = dayjs().format('[Today is ]dddd, MMMM D YYYY, hh:mm:ss a');

  document.querySelector("#clock").textContent = ticker;

}

setInterval(runningClock, 1000);


//color codes hours by past(grey), present(red), and future(green)

function hourColors() {

  for (let i = 0; i < hourTracker.length; i++) {


    if (hourTracker[i].dataset.time == currentHour) {
      hourTracker[i].classList.remove("past", "future")
      hourTracker[i].classList.add("present")

    } else if (hourTracker[i].dataset.time < currentHour) {
      hourTracker[i].classList.remove("present", "future")
      hourTracker[i].classList.add("past")

    } else {
      hourTracker[i].classList.remove("present", "past")
      hourTracker[i].classList.add("future")
    }
  }
}

hourColors();


//Puts text in local storage when a button or icon is clicked 

for (let i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener("click", function (event) {

    if (event.target.matches("button")) {

      localStorage.setItem(this.dataset.time, this.previousElementSibling.value);

    } else if (event.target.matches("i")) {

      localStorage.setItem(this.dataset.time, this.previousElementSibling.value);

    }
  })

}
