document.addEventListener("DOMContentLoaded", () => {
  // Event delegation for conversion buttons
  document.querySelectorAll(".btn-submit").forEach((button) => {
    button.addEventListener("click", (event) => {
      const conversionType = event.target.getAttribute("data-conversion");
      const inputField = document.querySelector(`#input-${conversionType}`);
      const resultDiv = document.querySelector(
        `.result[data-conversion="${conversionType}"]`
      );
      const clearButton = document.querySelector(
        `.clear-btn[data-conversion="${conversionType}"]`
      );

      const inputValue = parseFloat(inputField.value);

      if (isNaN(inputValue)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
      }

      let result;
      switch (conversionType) {
        case "km":
          result = `Result: ${inputValue} km = ${(
            inputValue * 0.621371
          ).toFixed(2)} miles`;

          break;
        case "celsius":
          result = `Result: ${inputValue} °C = ${(
            (inputValue * 9) / 5 +
            32
          ).toFixed(2)} °F`;

          break;
        case "grams":
          result = `Result: ${inputValue} grams = ${(
            inputValue * 0.035274
          ).toFixed(2)} ounces`;
          break;
        case "liters":
          result = `Result: ${inputValue} liters = ${(
            inputValue * 33.814
          ).toFixed(2)} fl oz`;
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
      const resultDiv = document.querySelector(
        `.result[data-conversion="${conversionType}"]`
      );

      // Clear input and result
      inputField.value = "";
      resultDiv.textContent = "";
      event.target.classList.add("d-none"); // Hide clear button
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Add Enter key support for all conversion inputs
  document.querySelectorAll("input[id^='input-']").forEach(input => {
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const conversionType = input.getAttribute("data-conversion");
        const submitButton = document.querySelector(`.btn-submit[data-conversion="${conversionType}"]`);
        submitButton.click();
      }
    });
  });
});
