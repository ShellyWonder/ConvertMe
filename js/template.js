//Controls the Form Groups Template
// Conversion types with labels and placeholders
document.addEventListener("DOMContentLoaded", () => {
  const conversionTypes = [
    { id: "km", label: "Kilometers to Miles", placeholder: "Enter kilometers" },
    {
      id: "celsius",
      label: "Celsius to Fahrenheit",
      placeholder: "Enter Celsius",
    },
    { id: "grams", label: "Grams to Ounces", placeholder: "Enter grams" },
    {
      id: "liters",
      label: "Liters to Fluid Ounces",
      placeholder: "Enter liters",
    },
  ];

  // Populate the form container dynamically
  const formContainer = document.getElementById("formContainer");
  if (!formContainer) {
    console.log("Element with ID 'formContainer' is missing.");
  }
  const formTemplate = document.getElementById("formTemplate");
  console.log(document.getElementById("formTemplate"));
  if (!formTemplate) {
    console.log("Template element with ID 'formTemplate' is missing.");
  }

  conversionTypes.forEach((type) => {
    const formClone = formTemplate.content.cloneNode(true);

    // Update input attributes
    const input = formClone.querySelector("input");
    input.setAttribute("id", `input-${type.id}`);
    input.setAttribute("data-conversion", type.id);
    input.setAttribute("placeholder", type.placeholder);

    // Update label
    const label = formClone.querySelector("small");
    label.textContent = type.label;

    // Update buttons and result div
    formClone
      .querySelector(".btn-submit")
      .setAttribute("data-conversion", type.id);
    formClone
      .querySelector(".clear-btn")
      .setAttribute("data-conversion", type.id);
    formClone.querySelector(".result").setAttribute("data-conversion", type.id);

    // Append to container
    formContainer.appendChild(formClone);
  });
});
