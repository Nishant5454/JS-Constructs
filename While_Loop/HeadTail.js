const prompt=require('prompt-sync')(); 
const Value=prompt("Press Enter to Flip coin")
function flipcoin(){
    let flipCoin=Math.random();
    if(flipCoin<0.5){
        "Heads"
    }
    else{
        "Tails"
    }
} 
let WinScore=11;
let HeadsCount=0;
let TailsCount=0; 
while(HeadsCount<WinScore||TailsCount<WinScore){
    let result=flipcoin();
    if(result=="Heads"){
        HeadsCount++;
    }
    else{
        TailsCount++;
    }
}
if(HeadsCount==WinScore){
    console.log("Heads Wins");
}
else{
    console.log(
        "Tails Wins"
    );
}