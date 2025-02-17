

function fibonacci(n:number){
if(n===0){
    return 0;
}
if(n===1){
    return 1;
}

let prevVal1=0;
let preVal2=1;
let currentVal=0;

for(let i=2;i<=n;i++){
currentVal=prevVal1+preVal2;
prevVal1=preVal2;
preVal2=currentVal;
}
return currentVal;
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(6));
