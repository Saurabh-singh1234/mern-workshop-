// function myFunction(mgs){
//         console.log("hello");
// }

// myFunction(mgs);

// function sum(x,y){
//         s=x+y;
//         console.log(s)
//         return s;
        
// } 
// sum(1,3);

// arrow function


// const arrowsum=(a,b) => {
//         console.log(a+b);
// };
// arrowsum (1,3);



// const printhello=()=>{
//         console.log("hello")
// };
// printhello();


// Question:1-> given string in sortout the vowel 

// function countVowel(str){
//         let count=0;
//         for(const char of str){
//         if (char==="a"|| char==="e"||char==="i"||char==="o"||char==="u")
        
//          count++;
//         }
//         console.log(count);
//         return count;
        
// }
// countVowel("saurabhsingh");


// foreach loop

// let arr=[1,2,3,4,4,5];
// arr.forEach(function printVal(val) {
//         console.log(val);
// });


// let arr=["delhi","mumbai","lucknow"];
// arr.forEach((val,idx,arr)=> {
//         console.log(val.toUpperCase(),idx,arr);
// });    

// qs:2-> given array find the square using foreach loop

// let num=[1,2,3,4,5,6,7];

// num.forEach((num)=>{
//         console.log(num*num);

// });

  

// function hello(){
//     return "hello"
// }
// console.log(hello())


// const addition =(a,b)=>{
//     return a+b
// }
// console.log(addition(1,3))


// console.log(2+addition())




// global variable 

// const hii="hello"
// const print =()=>{
//     const local="local variable"
//     // console.log(hii)
//      console.log(local)
// }
// print()
// console.log(local) =>not weite
//  console.log(hii) =>write

// let num=1234
//     console.log(num%10);

//     num= Math.floor(num/10)
//     console.log(num)

// let num = 1234 
// let count=0
// while(num>0){
//     num=Math.floor(num/10)
//     count++
   
// }
// console.log(count)

// find sum of digits 

// Number=1234 ==>1+2+3+4=>10

    // let Num=1234
    // let sum = 0;
    // while (Num > 0) {
    //     sum += Num % 10;
    //     Num = Math.floor(Num / 10);
    // }
    // console.log(sum)
   
    
// given number is palindrome or not


// let number= 1234
// let  original=number
// let reverse=0
// while (number>0){
//     let digit=number%10
//     reverse=reverse*10+digit
//     number=Math.floor(number/10)

// }
// console.log(reverse===original? "palindrome" : "not palindrome") 

// harshad number 
// divisibleby sum of digit

// let num =18
// let original=num
// let sum=0
// while(num>0){
//     sum+=num%10
//     num=Math.floor(num/10)
// }
// console.log(original%sum===0? "harshad number" : "not harshad number")

// armstrong number

// let num =123
// let original=num
// let sum=0
// while(num >0){
//     let digit=num %10
//     sum+=digit*digit*digit
//     num=Math.floor(num/10)
// }
// console.log(sum===original? "armstrong number" : "not armstrong number")


// for given number find the  priime number or nor 

// ...existing code...

// for given number find the  priime number or nor

// const isPrime = (num) => {
//      // 0 and 1 are not prime numbers
//     for (let i = 2; i <(num/2)+1; i++) { 
//         if (num % i === 0)
//             return "not a prime number";
//     }
//     return "prime number";
    
// };

// console

// console.log(isPrime(7)); // Output: true

// qs => perfect number 


// const perfec =(number) =>{
//     let sum=0
//     for(i=0;i<number;i++){
//         if(number%i==0){
//             sum+=i
//         }
//     }
//     if(sum==number){
//         return "perfect number"
//     }
// }
// console.log(perfec(6))

// ...existing code...

// print 10 prime numbers using while loop

// let count = 0;
// let num = 2;

// while (count <5) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//         count++;
//     }
//     num++;
// }


// or


// let count =10
// let number = 2
// while (count>=0){
//     if(Promise(number )){
//         console.log (number );
//         count--
//     }
// }


// strong number 
// sum of digit factorial equal number 


// ...existing code...

// strong number 
// sum of digit factorial equal number

// const factorial = (n) => {
//     let fact = 1;
//     for (let i = 2; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// };

// const isStrongNumber = (num) => {
//     let original = num;
//     let sum = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         sum += factorial(digit);
//         num = Math.floor(num / 10);
//     }
//     return sum === original ? "strong number" : "not strong number";
// };

// console.log(isStrongNumber(145)); // Output: strong
















