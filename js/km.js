import { handleEnterKey } from "./site.js";
document.getElementById("btnSubmit").addEventListener("click", convertItKm);

handleEnterKey("InputValue", convertItKm);

function convertItKm() {
  //get the user-entered value
  let kmValue = parseFloat(document.getElementById("InputValue").value);
  //Validation:
  if (isNaN(kmValue)) {
    alert("Please enter a number");
  } else {
    //covert km value to miles
    let milesValue = kmValue * 0.6214;

    //displays results fixed to 2 dec places
    document.getElementById(
      "results"
    ).innerHTML = `Result: ${kmValue} km = ${milesValue.toFixed(2)} miles
       <hr>`;
  }
}
