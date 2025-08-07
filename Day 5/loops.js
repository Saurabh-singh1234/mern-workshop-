//  for loops

// for(let i=0;i<18;i++){
//     console.log(i)
// }

//  while loop or do while loop
// let num=0
// do{
//     console.log("hello")
// }
// while(num<10){
//     console.log(num);
//     num++;
// }


// let name="saurabh"
// for(let i=name.length;i>=0;i--){
//     console.log(name.charAt(i));
// }


// let name="MADAM"
// let reversedName="";
// for(let i=name.length-1;i>=0;i--){
//     reversedName +=name.charAt(i);
// }
// console.log(name == reversedName);

// find the count of vowel inside string 

// let vowel = "aeiou"
// let vowcount = 0;
// let constcounts =0;
// let str = "saurabh"
// for(let i=0; i<str.length;i++){
//     if(vowel.includes(str[i])){
//         vowcount +=1;
//     }
//     else{
//         constcounts +=1;
//     }
// }
// console.log(vowcount)
// console.log(constcounts)


// this sentence is first letter big
// let sentence ="saurabh singh hello world "
// let word =""
// let result =""
// for(let i=0;i<sentence.length;i++){
//     if (sentence[i]!=" "){
//         word +=sentence[i]
//     }
//     else{
      
//         result += word.charAt(0).toUpperCase()+word.slice(1)+" "
//         word=""
//     }
   
// }
//  if(word){
//           result += word.charAt(0).toUpperCase()+word.slice(1)    
//     }
// console.log(result)



// for of loop -> it is used string and array 

// let str ="saurabsingh"
// for(let i of str){
//     console.log("i=" ,i);
// }  



// (for in loop ->it is used to object 

// let student={
//        name : "saurabh singh ",
//        age : 45 ,
//        cgpa : 7.4,
//        isPass: true,

// } ;

// for(let key in student ){
//         console.log ("key=",key , "value",student[key]);
// }


// all 100 number is all even number

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//          console.log(i);
//     }
// }


// let userName = prompt("saurabh");
// console.log(userName);