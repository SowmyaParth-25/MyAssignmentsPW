

function factorialCalculate(n:number):number|String {

    if(n<0){
        return "factorial is not computed for negative numbers";
        
    } 

    if(n==0 || n==1){
        return 1;
    }  
    let result=1;
        
    for (let i = 2; i <=n; i++) {
        result *= i;
    }
    return result;
    }
//factorial for positive number except 0,1
let n=8;
console.log(`Factorial of ${n} is ${factorialCalculate(n)}`);

//factorial for 0,1
n=0;
console.log(`Factorial of ${n} is ${factorialCalculate(n)}`);


//factorial for negative number 
n=-8;
console.log(`Factorial of ${n} is ${factorialCalculate(n)}`);

