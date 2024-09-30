window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {
    amount: 10000,
    years: 10,
    rate: 5,
  };
  document.getElementById("loan-amount").value = defaultValues.amount;
  document.getElementById("loan-years").value = defaultValues.years;
  document.getElementById("loan-rate").value = defaultValues.rate;

  update();
}

function update() {
  const currentValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(currentValues);
  updateMonthly(monthlyPayment);
}

function calculateMonthlyPayment(values) {
  const P = values.amount;
  const i = (values.rate / 100) / 12;
  const n = values.years * 12;
  const monthlyPayment = (P * i) / (1 - Math.pow((1 + i), -n));
  
  return monthlyPayment.toFixed(2); // always return 2 decimal places
}

function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = `$${monthly}`;
}

