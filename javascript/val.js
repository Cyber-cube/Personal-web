let responses = ["Really?", "Press again to continue", "PRESS YESSS", "Please!!", "Fine :("]
let minInc = null;
let max = 5;

window.onload = function () {
  inc = localStorage.getItem("minInc") || null;
  if (inc == null) {
    localStorage.setItem("minInc", 1);
  }
  minInc = inc;
}

function no() {
  if (minInc != max) {
    minInc ++;
    localStorage.setItem("minInc", minInc)
    document.getElemenById("no").innerHTML = responses[Math.floor(Math.random() * responses.length)]
    document.getElementById("no").style.width = 75 + 10 + "%";
  }
}