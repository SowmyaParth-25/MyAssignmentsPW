/*
Complete the following tasks to practice function declarations, arrow functions, anonymous functions, and callback functions in JavaScript.
   */

//Task 1:Function Declaration
function userProfile(){
    let name='Sowmya Testleaf'
    console.log(name)
}
userProfile()

//Task 3:Anonymous Declaration/Function Expression

 let setTimeoutFunc=function (){
    
     console.log("This message is delayed by 2 seconds")
 }
 
 setTimeout(setTimeoutFunc, 3000);




// Task 2: Arrow Function

let double= (a) => {

    return a*2
}
console.log("doubled value is:",double(125))

//Task 4: Call back function

function getUserData (name,call) {
    console.log("hello"+name);
    call();
}

function userDetails(){
    console.log("User name is Testleaf");
    console.log("User age is 31")
   }

   setTimeout(userDetails,3000)
   
   getUserData("PW Jan Learners",userDetails)



//Immediately Invoked Function(IIFE)

// ( function () {
   
//     console.log("Immediately Invoked Function")
// }
// )

// ()

