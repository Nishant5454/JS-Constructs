const prompt=require('prompt-sync')();
let eachbetvalue=prompt("Enter the Gamble value")
let finalValue=200; 
let initialcount=100; 
while(eachbetvalue<finalValue){
    eachbetvalue++;
    console.log("Place the Bet");
}
if(eachbetvalue==finalValue){
    console.log("No more money Left");
}