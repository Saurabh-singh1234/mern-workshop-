// 1-> check if two string are Anagrams

// Input :  "listen", "silent"
// Output : true

let word1 = "listen";
let word2 = "silent";

let Anagrams= true;

if(word1.length!=word2.length){
        console.log("not present");
}
else{
    for(let i of word1){
        if(word2.includes(i)){
            // anagrams=true
            continue

        }
        else{
             console.log("not present");
             break;
        }
    }
}
console.log("its a anagrams");


// 2-> find the first non repeating character

// input ->"aabbcde"
// output-> "c"
let word="aabbcde"
for(let i of word ){
    if(word.indexOf(i)==word.lastIndexOf(i)){
        console.log(i);
        
       break;
    }
}
// for(let i of word ){
//     console.log(word.lastIndexOf(i))
//     console.log(word.indexOf(i))
// }





// 3-> find the most frequent charater 
// input : "javascript"
// output : "a" or "s" (depending on implementation)

let str = "javascript";
let maxChar = '';
let maxCount = 0;

for (let i = 0; i < str.length; i++) {
  let currentChar = str[i];
  let count = 0;

  for (let j = 0; j < str.length; j++) {
    if (str[j] === currentChar) {
      count++;
    }
  }

  if (count > maxCount) {
    maxCount = count;
    maxChar = currentChar;
  }
}

console.log("Most frequent character is:", maxChar);




// 4 -> Remove all digits from a string 
// input : "SAURABH12334"

let input = "SAURABH12334";
let result = "";

for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if (!(char >= '0' && char <= '9')) {
    result += char;
  }
}


console.log(result); // Output: "SAURABH"

// let result =""
// let word="SAURABH235456568"
// for(let i of word ){
//     if(i.toLowerCase()==i.toUpperCase()){
//         continue
//     }
//     else{
//         result +=i
//     }
// }
// console.log (result);


// 5-> count number of word (without .split ())


// let input = "This is a simple example";
// let wordCount = 0;
// let inWord = false;

// for (let i = 0; i < input.length; i++) {
//   let char = input[i];
  
//   if (char !== ' ' && !inWord) {
//     wordCount++;
//     inWord = true;
//   } else if (char === ' ') {
//     inWord = false;
//   }
// }

// console.log(wordCount); // Output: 5 or
   

// let sentence ="i am student "
// let word =""
// let count = 0

// for(let i of sentence ){
//     if(i!=" "){
       
//         word+=i
//     }
//     else if (word){
//         count++
//         word=""
//     }
// }
// if (word){
//     count++
// }
// console.log (count )



// 6 -> Replace All space with Dashes

// const str = "my name is saurabh singh "
// console.log (str.replaceAll(" ","_"));

// 7-> check if one string is rotation of another 



// let str1="hello"
// let str2="my"

// let str3= str1+str1
// console.log(str3)
// if(str3.includes(str2)){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// 8-> countpalindrom input =("aaa")  output = 6

// let word ="aaa"
// let count=0

// for(let i=0; i<word.length;i++){
//     for(let j=i;j<=word.length;j++){
//         // console.log(i,j)
//         if(word.slice(i,j)){
//              if( word.slice(i,j)==word.slice(i,j).split().reverse().join()){
//             count++
//         }
      
//        }
//     }
// }
// console.log(count);


// 9->  Remove All Ajancent dublicates in js  

// let word="aabbaccad"
// let w=""

// for(let i of word ){
//         if(i==w[w.length-1]){
//             w=w.slice(0,w.length-1);
//         }
//         else{
//             w +=i;
//         }
// }
// console.log(w)

