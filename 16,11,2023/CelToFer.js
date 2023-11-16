const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Flag to determine if the program should continue running
let continueProgram = true;

function getUserInput() {
    rl.question('Enter temperature in Celsius: ', (input) => {
        // Check if the user wants to exit
        if (input.toLowerCase() === 'exit') {
            continueProgram = false;
            rl.close();
            return;
        }

        // Parse the input to a float
        const celsiusTemperature = parseFloat(input);

        // Check if the input is a valid number
        if (!isNaN(celsiusTemperature)) {
            const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
            console.log(`${celsiusTemperature} degrees Celsius is equal to ${fahrenheitTemperature} degrees Fahrenheit.`);
        } else {
            console.log("Invalid input. Please enter a valid number.");
        }

        // Ask for input again
        getUserInput();
    });
}

// Start the program
getUserInput();

// Listen for close event to exit the program
rl.on('close', () => {
    console.log('Exiting program.');
    process.exit(0);
});
