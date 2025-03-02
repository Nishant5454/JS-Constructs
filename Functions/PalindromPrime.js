const prompt=require('prompt-sync')();
let number=prompt("Enter the Number to check if the Number is Prime and its Palindrome is also Prime")

function isPrime(num){ 
    if(num<=1)
    return false;
for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i==0){
        return false;
    }
}
return true;

}
function isPalindrome(num){
    const strNum=num.toString();
    const value=strNum.split('').reverese().join();
    return strNum==value;
}
isPalindromecheck=false;
if(isPrime(number)){
    isPalindromecheck=isPalindrome(number);
}
isPalindromenumberPrime=false;
if(isPalindromecheck){ 
    let reversedNumber=parseInt(number.toString().split('').reverse().join(''));
    isPalindromenumberPrime=isPrime(reversedNumber);


}
if(isPalindromenumberPrime){
    console.log("True");
}
else{
    console.log("False");
}
