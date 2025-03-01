const prompt = require('prompt-sync')();
let digit = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.): ")); // Convert input to integer

switch (digit) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Lakh");
        break;
    case 1000000:
        console.log("Million");
        break;
    case 1000000000:
        console.log("Billion");
        break;
    case 1000000000000:
        console.log("Trillion");
        break;
    default:
        console.log("Invalid Input! Please enter a power of 10 (1, 10, 100, 1000, etc.).");
}
