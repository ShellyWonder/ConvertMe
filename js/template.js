//Controls the accordion Template
// Conversion types with labels and placeholders
document.addEventListener("DOMContentLoaded", () => {
  const conversionTypes = [
    {
      id: "meters",
      label: "Meters to Feet",
      placeholder: "Enter meters",
    },
    { id: "km", label: "Kilometers to Miles", placeholder: "Enter kilometers" },
    {
      id: "celsius",
      label: "Celsius to Fahrenheit",
      placeholder: "Enter Celsius",
    },
    { id: "grams", label: "Grams to Ounces", placeholder: "Enter grams" },
    {
      id: "kg",
      label: "Kilograms to Pounds",
      placeholder: "Enter kilograms",
    },
    { id: "liters", label: "Liters to Gallons", placeholder: "Enter liters" },
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
    conversionTypes.forEach((type, index) => {
      const formClone = formTemplate.content.cloneNode(true);
    
      // Replace {id} and {label} in the template
      const html = formClone.querySelector('.accordion-item').innerHTML
          .replace(/{id}/g, type.id)
          .replace(/{label}/g, type.label);
    
      formClone.querySelector('.accordion-item').innerHTML = html;

      // Set the first item to be expanded
      if (index === 0) {
          formClone.querySelector('.accordion-button').classList.remove('collapsed');
          formClone.querySelector('.accordion-collapse').classList.add('show');
      }

      // Update input attributes
      const input = formClone.querySelector("input");
      input.setAttribute("id", `input-${type.id}`);
      input.setAttribute("data-conversion", type.id);
      input.setAttribute("placeholder", type.placeholder);

      // Update other elements as before
      formClone.querySelector(".btn-submit").setAttribute("data-conversion", type.id);
      formClone.querySelector(".clear-btn").setAttribute("data-conversion", type.id);
      formClone.querySelector(".result").setAttribute("data-conversion", type.id);

      // Append to accordion container
      document.getElementById("conversionAccordion").appendChild(formClone);
    });
  });
