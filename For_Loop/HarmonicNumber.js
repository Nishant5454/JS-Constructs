const prompt=require('prompt-sync')();
let number=prompt("Enter the Number to Calculate nth Harmonic Number");
let harmonicnumber=1.00; 
for(let i=2;i<=number;i++){
    harmonicnumber+=parseFloat(1)/i

}
console.log(harmonicnumber);