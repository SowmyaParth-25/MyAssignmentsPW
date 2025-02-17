
//filter
const nums=[2,4,5,2,1,2,5,2,6,2];
let k=2;
 let occurences=nums.filter(val=>val==k).length;
 console.log(occurences);

/*let count=0;
function occurences(){
for (let i = 0; i < nums.length; i++) {
   if(nums[i]==k){
count++;
   }
    
}
return count;
}
const nums = [2,4,5,2,1,2,5,8,5,9,5,10];
let k=5;
console.log(occurences());
*/