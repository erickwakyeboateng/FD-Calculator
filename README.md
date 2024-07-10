# Fixed Deposit (FD) Calculator

This is a simple Fixed Deposit (FD) Calculator that calculates the maturity amount based on the principal amount, interest rate, and tenure. The result is displayed with a thousand separator for better readability.

## How It Works

The calculator takes three inputs from the user:
1. **Principal Amount**: The initial amount of money invested.
2. **Interest Rate**: The annual interest rate (in percentage).
3. **Tenure**: The duration of the investment (in years).

The maturity amount is calculated using the formula:
\[ \text{Maturity Amount} = \text{Principal} + \left( \text{Principal} \times \text{Interest Rate} \times \text{Tenure} \right) / 100 \]

The result is displayed with two decimal places and a thousand separator.

## Code Explanation

### Function Definition


- **Getting Input Values**: The function retrieves the values entered by the user in the input fields for principal, interest rate, and tenure. It converts these values to floating-point numbers using `parseFloat`.

- **Perform Calculation**: The maturity amount is calculated using the given formula.

- **Display the Result**: The calculated maturity amount is formatted to two decimal places and a thousand separator is added for readability. The result is then displayed in the HTML element with the id `result`.

### Adding the Event Listener



- **Event Listener**: An event listener is added to the button with the id `calculateBtn`. When this button is clicked, the `calculateMaturityAmount` function is executed.

## Usage

1. Open the HTML file in a web browser.
2. Enter the principal amount in the "Principal Amount" input field.
3. Enter the annual interest rate (in percentage) in the "Annual Interest Rate" input field.
4. Enter the tenure (in years) in the "Tenure" input field.
5. Click the "Calculate" button.
6. The maturity amount will be displayed below the button.

## Example

If you enter the following values:
- Principal Amount: 10000
- Annual Interest Rate: 5
- Tenure: 3

Clicking the "Calculate" button will display:




## License

This project is licensed under the MIT License and free-to-use. 

