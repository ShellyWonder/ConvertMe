//driver function used for display and passing values.
function convertIt() {

    //get the user-entered value
    let kmValue = parseFloat(document.getElementById("InputValue").value);
  //Validation:
    if (isNaN(kmValue) ) {
        alert("Please enter a number");

    } else {
        //call your function to conver the vm value to miles
        let milesValue = convertToKm(kmValue);

        //display your results fixed to 2 dec places
        document.getElementById("results").innerHTML = `${kmValue} km = ${milesValue.toFixed(2)} miles`;
    }

}

//performs equation Km * 0.6214 = Miles 
function convertToKm(kmValue) {
  let milesValue = 0;
  milesValue = kmValue * 0.6214;
   return milesValue;
}