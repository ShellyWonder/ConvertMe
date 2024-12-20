import { handleEnterKey } from "./site.js";

document.getElementById("btnSubmit4").addEventListener("click", convertItLiter);
document.getElementById("clearBtn4").addEventListener("click", clearResults);
handleEnterKey("InputValue4", convertItLiter);

function convertItLiter() {
  let literValue = parseFloat(document.getElementById("InputValue4").value);
  if (isNaN(literValue)) {
    alert("Please enter a number");
  } else {
    //performs equation flOz = literValue * 33.814;
    let flOzValue = literValue * 33.814;

    //displays results fixed to 2 dec places
    document.getElementById(
      "results4"
    ).innerHTML = `Result: ${literValue} liters = ${flOzValue.toFixed(2)} fluid ounces
       <hr>`;
    document.getElementById("clearBtn4").classList.remove("d-none");
  }
}

function clearResults() {
    document.getElementById("InputValue4").value = "";
    document.getElementById("results4").innerHTML = "";
    document.getElementById("clearBtn4").classList.add("d-none");
}
