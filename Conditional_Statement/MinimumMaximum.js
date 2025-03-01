function findThreedigitnum(){
    return Math.floor(Math.random() * 900) + 100;
}
function findmaxAndmin(){
    let arr=[];
    for(let i=0;i<5;i++){
    arr.push(findThreedigitnum(i));
    } 
    let max=Math.max.apply(null,arr);
    let min=Math.min .apply(null,arr); 
    console.log("Array  max value is : "+max);
    console.log("Array  min value is : "+min);
}
findmaxAndmin();