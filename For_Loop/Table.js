const prompt=require('prompt-sync')();
let number=prompt("Enter the Number:"); 
let value=Math.pow(number,2); 
for(let i=1;i<=value;i++){
    for(let j=1;j<=10;j++){
        console.log(i*j);
    }
}

