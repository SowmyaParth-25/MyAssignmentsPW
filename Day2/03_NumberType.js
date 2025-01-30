
/*
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type.
*/
let number;
function runTests(number){

    if(number>0){
        console.log("Positive Number: ",number)
    }else if(number<0) {
console.log("Negative Number:",number)
    } else
    console.log("Number is Neutral:",number)
}
runTests(0);
runTests(10);
runTests(-10);
