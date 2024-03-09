// variables

let workTittle = document.getElementById("work");
let breakTittle = document.getElementById("break");

let workTime = 25;
let breakTime = 5;
let seconds = "00";

//display on screen

window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTittle.classList.add("active");
};

//start timer

function start() {
  //change button
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  // change the time
  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  //countdown
  let timeFunction = () => {
    //change the display
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    //start
    seconds = seconds - 1;

    if (seconds === 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          // start break timer
          workMinutes = breakMinutes;
          breakCount++;

          //change the panel
          workTittle.classList.remove("active");
          breakTittle.classList.add("active");
        } else {
          // continue work
          workMinutes = workTime;
          breakCount++;

          //change the panel
          breakTittle.classList.remove("active");
          workTittle.classList.add("active");
        }
      }
      seconds = 59;
    }
  };

  //  start countdown
  setInterval(timeFunction, 1000);
}
