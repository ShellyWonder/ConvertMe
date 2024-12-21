document.addEventListener('DOMContentLoaded', updateCopyrightYear);
function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyrightYear").textContent = currentYear;
}



