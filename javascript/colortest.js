let redValue = document.getElementById("redSlider");
let greenValue = document.getElementById("greenSlider");
let blueValue = document.getElementById("blueSlider");

redValue.addEventListener("input", updateValue)
greenValue.addEventListener("input", updateValue)
blueValue.addEventListener("input", updateValue)

function updateValue() {
  const red = redValue.value;
  const green = greenValue.value;
  const blue = blueValue.value;
  let output = document.getElementById("output");
  output.textContent = `RGB(${red}, ${green}, ${blue})`;
  document.documentElement.style.setProperty('--red', red);
  document.documentElement.style.setProperty('--green', green);
  document.documentElement.style.setProperty('--blue', blue);
}