let redValue = document.getElementById("redSlider");
let greenValue = document.getElementById("greenSlider");
let blueValue = document.getElementById("blueSlider");

redValue.addEventListner("input", redValue())
greenValue.addEventListner("input", greenValue())
blueValue.addEventListner("input", blueValue())

function redValue() {
  document.getElementById("redValue").textContent = redValue.value;
}
function greenValue() {
  document.getElementById("greenValue").textContent = greenValue.value;
}
function blueValue() {
  document.getElementById("bluedValue").textContent = blueValue.value;
}