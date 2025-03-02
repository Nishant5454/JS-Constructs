function isPalindrome(num){
    const strNum=num.toString(); 
    const value=strNum.split('').reverse().join('');
    return strNum==value;

} 
function checkPalindrome(num1,num2){
    if(isPalindrome(num1)&&isPalindrome(num2)){
        console.log(`${num1} && ${num2} both are palindrome`);
    }

}
checkPalindrome(121,232)