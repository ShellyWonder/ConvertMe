document.addEventListener("DOMContentLoaded", () => {
    // Event delegation for conversion buttons
    document.querySelectorAll(".btn-submit").forEach((button) => {
      button.addEventListener("click", (event) => {
        const conversionType = event.target.getAttribute("data-conversion");
        const inputField = document.querySelector(`#input-${conversionType}`);
        const resultDiv = document.querySelector(`.result[data-conversion="${conversionType}"]`);
        const clearButton = document.querySelector(`.clear-btn[data-conversion="${conversionType}"]`);
        
        const inputValue = parseFloat(inputField.value);
  
        if (isNaN(inputValue)) {
          resultDiv.textContent = "Please enter a valid number.";
          return;
        }
  
        let result;
        switch (conversionType) {
          case "km":
            result = (inputValue * 0.621371).toFixed(2) + " miles";
            break;
          case "celsius":
            result = ((inputValue * 9) / 5 + 32).toFixed(2) + " °F";
            break;
          case "grams":
            result = (inputValue * 0.035274).toFixed(2) + " ounces";
            break;
          case "liters":
            result = (inputValue * 33.814).toFixed(2) + " fl oz";
            break;
          default:
            result = "Conversion type not recognized.";
            break;
        }
  
        // Display the result and show the clear button
        resultDiv.textContent = result;
        clearButton.classList.remove("d-none");
      });
    });
  
    // Event delegation for clear buttons
    document.querySelectorAll(".clear-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const conversionType = event.target.getAttribute("data-conversion");
        const inputField = document.querySelector(`#input-${conversionType}`);
        const resultDiv = document.querySelector(`.result[data-conversion="${conversionType}"]`);
  
        // Clear input and result
        inputField.value = "";
        resultDiv.textContent = "";
        event.target.classList.add("d-none"); // Hide clear button
      });
    });
  });
  