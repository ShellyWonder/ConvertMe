document.addEventListener('DOMContentLoaded', updateCopyrightYear);
function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyrightYear").textContent = currentYear;
}

export function handleEnterKey(inputId, conversionFunction) {
  document.getElementById(inputId).addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          conversionFunction();
      }
  });
}

function clearResults() {
  document.getElementById("InputValue").value = "";
  document.getElementById("results").innerHTML = "";
  document.getElementById("clearBtn").classList.add("d-none");
}

