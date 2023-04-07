document.getElementById("submitBtn").addEventListener("click", convertNumber);

function convertNumber() {
  let yourNumber = document.getElementById("yourNumber").value;
  const meterToFeet = yourNumber * 3.3;
  const feetToMeter = yourNumber / 3.3;
  const kiloToPound = yourNumber * 2.2;
  const poundToKilo = yourNumber / 2.2;
  const literToGallon = yourNumber * 0.26;
  const gallonToLiter = yourNumber * 3.785;

  document.getElementById(
    "length-el"
  ).innerHTML = `${yourNumber} meters = ${meterToFeet.toFixed(
    3
  )} ft | ${yourNumber} ft = ${feetToMeter.toFixed(3)} meters`;

  document.getElementById(
    "volume-el"
  ).innerHTML = `${yourNumber} liters = ${literToGallon.toFixed(
    3
  )} gallons | ${yourNumber} gallons = ${gallonToLiter.toFixed(3)} liters
      `;

  document.getElementById(
    "mass-el"
  ).innerHTML = `${yourNumber} kilos = ${kiloToPound.toFixed(
    3
  )} | ${yourNumber} pounds = ${poundToKilo.toFixed(3)} kilos`;
}
