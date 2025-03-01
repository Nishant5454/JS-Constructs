const prompt=require('prompt-sync')(); 
let num=prompt("Enter the Number to check for Prime ")
let isprime=true; 
if(num<=1){
    isprime=false;
}
else{
    for(let i=2;i<num;i++){
        if(num%i==0){
            isprime=false;
            break;
        }
    }
}
if(isprime){
    console.log("Number is prime");
}
else{
console.log("Number is not prime")
}
