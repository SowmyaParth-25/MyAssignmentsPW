//Classroom Assignment: Promise

let fetchDataFromDatabase=new Promise((resolve,reject)=>{

   console.log("fetching data from database........")

    const data = true;
    if(data){
         //set time out
    setTimeout(()=>{
        resolve("Data fetched successfully!");
    },3000)
       
    }else{
         //set time out
    setTimeout(()=>{
        reject("Data not found!");
    },3000)
       
    }
})

//Using promise
fetchDataFromDatabase.then(message=>{
    console.log(message);
}).
catch(error=>{
    console.log(error);
    
})