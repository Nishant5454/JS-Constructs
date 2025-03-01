const prompt=require('prompt-sync')();
function digitToString(){
    let digit = prompt('Enter the number between 0 to 9: ');
    if(digit == 10)
        console.log("Ten");
    else if(digit == 100)
        console.log("Hundred");
    else if(digit == 1000)
        console.log("Thousand");
    else if(digit == 100000)
        console.log("Lakh");
    else if(digit == 1000000)
        console.log("TenLakhs");
    else if(digit == 1000000000)
        console.log("Crore");
    else if(digit == 10000000000)
        console.log("Million");
    else
        console.log("Invalid input");
}
digitToString();