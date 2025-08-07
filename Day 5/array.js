// create Array


// let marks =[1,2,3,4];
// console.log(marks);
// console.log(marks.length);

// let str =["1","3","4"];
// console.log(str);
// console.log(str.length);

// let number =[1,2,3,4,5,6];

// numbers.forEach((element,index)=>console.log(index,element))


// let changed =numbers.map((number)=> number * number)
//     console.log(changed);


// let sum=numbers.reduce((some,element)=>some+element)
// some=0 element=1
// some=15
// console.log(sum)
                    //some

// let even =number.some((n)=> n%2==0)
// console.log(even);

                //every

//  let positive =number.every((n)=> n>0)
// console.log(positive);

                //filter

//  let even =number.filter((n)=> n%2==0)
//  console.log(even);

// let number =[1,2,36,46,56,66];

            //find

// let greater = number.find((n)=>n>10)
// console.log(greater)

            //findindex

// let greater = number.findIndex(n=>n>10)
// console.log(greater)

        // push operation

// let number =[1,2,36,46,56,66];
// number.push(7);
// console.log (number );

// number.pop()
// console.log (number );

// number.unshift(0)
// console.log (number );

// let content=["hello","hii","word"]
// content.splice(1,1,"bye")
// console.log(content)

// content.splice(1,0,"hlo")
// console.log(content)

        //concat

// let arr1=[2,4,6,]
// let arr2=[7,8,9,]
// let arr3=arr1.concat(arr2)
// console.log(arr3)


// find number mising from given array

// let number =[1,2,3,4,6,7,8,9]


// for(i=0;i<=number.length;i++){
//     if(number[i]!==i+1){
//         console.log("missing number is",i+1);
//         break;
//     }
// }


// find two mising number 

// let number =[1,2,3,4,6,8,9]



// for(i=0;i<=number.length;i++){
//      missing.push(i)
//     if(number[i]!==i+2){
       
//         console.log("missing number is",i+2);
       
//         break;
        
//     }
    
// }


//two sum 
//input [1,2,3,4,5,6,8],=10

// let  arr1=[1,2,3,4,5,6,8]
// let sum=[]
// for(let i=0;i<arr1.length;i++){
//     for(let j=i+1;j<arr1.length;j++){
//         if(arr1[i]+arr1[j]==10){
           
//             console.log( arr1[i],arr1[j])
            
//         }
//     }
// }

//  move all zero

// const movezeros=(arr)=>{
//     zero=[]
//     result=[]
//     for(let i of arr){
//         if(i==0){
//             zero.push(i)
//         }
//         else result.push(i)
//     }
//     return  result.concat(zero)
// }
// console.log(movezeros([1,2,0,6,0,6,0]))

// let maxsum=Infinity
// let nums =[2,-4,-4,6,-5,0,-3,5,9] 
// for(let i=0;i<nums.length;i++){
//     let sum=0
//     for(j=i;j<nums.length;j++){
//         sum+=nums[j]
//         if(maxsum<sum) maxsum=sum
        
//     }
// }


// arr =[1,2,3,4]==>[4,1,2,3]
// right rotate by one plce

                        
// let arr = [1, 2, 3, 4];
// let last = arr.pop();
// arr.unshift(last);


// console.log(arr); 

// product except itself
// let arr=[1,2,3,4]
// let arr1=[]
// let product=1
// for(i of arr){
//     product*=i
// }
// console.log(product)


//[101,102,103,1,2,3,104,105,5,6,7]

// let arr=[101,102,103,1,2,3,104,105,5,6,7]
// console.log(arr.sort());

// arr.sort((a,b)=>(a-b))
// let lengt=1
// let maxLength=0
// for(let i=1;i<arr.length;i++){
//         if(arr[i]==arr[i-1]){
//                 lengt++
//         }
//         else lengt=1
//         if(lengt>maxLength){
//                 maxLength=lengt
//         }
// }
// console.log(maxLength)









