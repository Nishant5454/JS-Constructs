const prompt=require('prompt-sync')();
let num1=prompt("Enter the 1st Number:");
let num2=prompt("Enter the Second number:");
let num3=prompt("Enter the 3rd number:");
let maximumvalue=0; 
let minimumvalue=0;
if(num1>num2&&num1>num3){
    maximumvalue=num1
}
else if(num2>num1&&num2>num3){
   // console.log("The greatest number is "+num2);
   maximumvalue=num2
}
else if(num3>num1&&num3>num2){
    //console.log("The greatest number is "+num3);
    maximumvalue=num3;
}
if(num1<num2&&num1<num3){
    minimumvalue=num1
}
else if(num2<num1&&num2<num3){
    minimumvalue=num2;
}
else if(num3<num1&&num3<num2){
    minimumvalue=num3;
}
console.log("Maximum value is "+maximumvalue);
console.log("Minimum value is "+minimumvalue);