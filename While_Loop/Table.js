const prompt=require('prompt-sync')(); 
let number=prompt("Enter the Number to print the table"); 
console.log(`Power of 2^ is ${number} stopped if n exceed 256`)
let i=0; 
let power=1; 
while(i<=number&&power<=256){
    console.log(`2^${i} is =${power}`);
    power*=2;
    i++;
}