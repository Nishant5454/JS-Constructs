const prompt=require('prompt-sync')();
function isprime(num){
    if(num<=1)
    return true;
for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i==0){
        return false;
    }
}
return true;
}
let num1=prompt("Enter the Number 1:");
let num2=prompt("Enter the Number 2");
console.log(`Prime number between ${num1} and the ${num2} is `);
for(let i=num1;i<=num2;i++){
    if(isprime(i))
    console.log(i);
}
