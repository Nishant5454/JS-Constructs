const prompt = require('prompt-sync')();

// Function to perform unit conversion
function unitConversion() {
    console.log("\nSelect Conversion Type:");
    console.log("1. Feet to Inch");
    console.log("2. Feet to Meter");
    console.log("3. Inch to Feet");
    console.log("4. Meter to Feet");

    let choice = parseInt(prompt("Enter your choice (1-4): "));

    switch (choice) {
        case 1:
            let feetToInch = parseFloat(prompt("Enter length in Feet: "));
            console.log(`${feetToInch} Feet = ${feetToInch * 12} Inches`);
            break;

        case 2:
            let feetToMeter = parseFloat(prompt("Enter length in Feet: "));
            console.log(`${feetToMeter} Feet = ${(feetToMeter * 0.3048).toFixed(4)} Meters`);
            break;

        case 3:
            let inchToFeet = parseFloat(prompt("Enter length in Inches: "));
            console.log(`${inchToFeet} Inches = ${(inchToFeet / 12).toFixed(4)} Feet`);
            break;

        case 4:
            let meterToFeet = parseFloat(prompt("Enter length in Meters: "));
            console.log(`${meterToFeet} Meters = ${(meterToFeet * 3.28084).toFixed(4)} Feet`);
            break;

        default:
            console.log("Invalid Choice! Please enter a number between 1-4.");
    }
}

// Call the function to perform unit conversion
unitConversion();
