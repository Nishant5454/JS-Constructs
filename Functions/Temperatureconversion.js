const prompt=require('prompt-sync')();
const temperature=prompt('Enter the temperature value :');
function inFarenhite(num){
    const DegreeCelsius=(num-32)*5/9;
    console.log(`The ${num} Farenhite is equals to ${DegreeCelsius} DegreeCelsius`);
}
function inCelsius(num){
    const DegreeFarenhite=(num*9/5)*32; 
    console.log(`The ${num}Degree equal to ${DegreeFarenhite} Farenhite`);
}
if(temperature>=0&&temperature<=100){
    inFarenhite(temperature);
}
if(temperature>=32&&temperature<=212){
    inCelsius(temperature)
}
