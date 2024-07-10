function calculateMaturityAmount() {
    // Get Input Values from the form elements

    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // Perform Calculation
    const maturityAmount = principal + (principal * interestRate * tenure) / 100;

    // Display the Result with a thousand separator
    document.getElementById('result').innerText = `Maturity Amount: GHC ${maturityAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

}

//Add Event Listener
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);
