const prompt=require('prompt-sync')();
let array=[];
function isPrime(num) 
{
    if(num<=1)
    return true;  
for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i==0){
        return false;
    }
}
return true;
}
let number=prompt("Enter the Number for find the Prime Factors")
for(let i=1;i<=number;i++){
    if(number%i==0){
        array.push(i);
    }
}
console.log(`The prime factors of the ${number} is`);
for(let i=0;i<=array.length;i++){
    if(isPrime(array[i])){
        console.log(i);
    }
}

