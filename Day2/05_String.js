/* Home Assignment: String*/

//Example 1

let word="Hello World"
console.log(`The give string is ${word}`)
let array =word.split("")

console.log('Split the string into an array of words',array)

let lastWord=array.slice(6,11)
console.log(`The last word is ${lastWord} with lenth ${lastWord.length}`)

//Example 2

let stringWords=" fly me to the moon "
let trimWords=stringWords.trim()
console.log(`Trim the String as:${trimWords}`)

let splitWords=trimWords.split("")
console.log(`Split the String into Words as:${splitWords}`)

let lastWord1=splitWords.slice(14,18)
console.log(`Identify the Last Word: ${lastWord1}`)

console.log(`Calculate the Length of the Last Word:${lastWord1.length}`)

console.log(`The last word is ${lastWord1} with lenth ${lastWord1.length}`)


//Example 3(Anagram or not)

function isAnagram(string1,string2){
   //Remove spaces and convert all letters to the same case
    string1=string1.replace(" ", "").toLowerCase();
   string2=string2.replace(" ", "").toLowerCase();

   //Sort the Characters in both Strings
   let sortedStr1=string1.split('').sort().join('');
   let sortedStr2=string2.split('').sort().join('');

   //Compare the sorted strings
//Return true if they are the same, otherwise false
   return sortedStr1===sortedStr2;
   
}
console.log(isAnagram('listen','silent'));  //output:true
console.log(isAnagram('wolf','flow')); //output:true
console.log(isAnagram('wolf','tree')); //output:false
