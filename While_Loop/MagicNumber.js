const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100, and I will find it!");

let low = 1;
let high = 100;

function findMagicNumber() {
    if (low > high) {
        console.log("Something went wrong. Please start over.");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);
    rl.question(`Is your number ${mid}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === "yes") {
            console.log(`Great! Your magic number is ${mid}.`);
            rl.close();
        } else {
            rl.question(`Is your number less than ${mid}? (yes/no): `, (response) => {
                if (response.toLowerCase() === "yes") {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
                findMagicNumber();
            });
        }
    });
}

findMagicNumber();
