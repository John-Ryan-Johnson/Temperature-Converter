const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

/*
const toCelsius =  () => {

}

const toFahrenheit =  () => {

}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  console.log("event", e);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
*/

