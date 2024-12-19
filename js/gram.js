import { handleEnterKey } from "./site.js";

document.getElementById("btnSubmit3").addEventListener("click", convertItGram);
document.getElementById("clearBtn3").addEventListener("click", clearResults);
handleEnterKey("InputValue3", convertItGram);

function convertItGram() {
  let gramValue = parseFloat(document.getElementById("InputValue3").value);
  if (isNaN(gramValue)) {
    alert("Please enter a number");
  } else {
    //performs equation ounce = gramValue / 28.35;
    let ounceValue = gramValue / 28.35;

    //displays results fixed to 2 dec places
    document.getElementById(
      "results3"
    ).innerHTML = `Result: ${gramValue} grams = ${ounceValue.toFixed(2)} ounces.
       <hr>`;
       document.getElementById("clearBtn3").classList.remove("d-none");
  }
  
}
function clearResults() {
    document.getElementById("InputValue3").value = "";
    document.getElementById("results3").innerHTML = "";
    document.getElementById("clearBtn3").classList.add("d-none");
  }
