// ======================== Business Logic ======================== 

// ======================== User Interface Logic ======================== 

function handleCalculation(event) {
  event.preventDefault();
  const selection = document.getElementById("frogEyes").value;
  console.log(selection);
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});

  document.getElementById("frogEyes").value