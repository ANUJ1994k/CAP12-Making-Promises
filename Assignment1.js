let n1=23;
let n2=11;

// Define the calculate function
function calculate(num1, num2) {
    // Define the operation function
    function operation(num1, num2, callback) {
        return callback(num1, num2);
    }

    // Callback function for addition
    function add(a, b) {
        return a + b;
    }

    // Callback function for multiplication
    function multiply(a, b) {
        return a * b;
    }

    // Performing addition
    const addition = operation(num1, num2, add);
    console.log(`Addition of ${num1} and ${num2} is: ${addition}`);

    // Performing multiplication
    const multiplication = operation(num1, num2, multiply);
    console.log(`Multiplication of ${num1} and ${num2} is: ${multiplication}`);
}

// calling calculate function for executing async code
calculate(n1, n2);
