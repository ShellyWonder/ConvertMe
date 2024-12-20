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


