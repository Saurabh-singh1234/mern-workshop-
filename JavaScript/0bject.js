// const employee ={
//     calTax(){
//         console.log("tax rate is 10%");
//     }
// };

// const { useCallback } = require("react");

// const karanArjun ={
//     salary :234 ,
//     calTax() {
//         console.log("tax rate is 20%");
//     }
// };
// karanArjun._proto_ = employee;


//           class


// class car {
//     start(){
//         console.log("start");
//     }
//      stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new car();

// fortuner.start();
// fortuner.stop();


// let DATA ="secret inforation"
// class User {
//     constructor (name ,email){
//         this.name = name;
//         this.email = email;

//     } 

//     viewData(){
//         console.log("data =" ,DATA);
//     }
// }

// class Admin extends User{
//     constructor (name ,email){
//         super(name , email);
//     }
//     editData(){
//         DATA ="some new data";
//     }
// }

// let student1 = new User("saurabh", "saurabhsingh10761@gmail.com");
// let student2 = new User("rohit", "rohitsingh10761@gmail.com");

// let Admin1 = new Admin("nitin" ,"admin@gamial.com");



// let a=1;
// let b=2;

// console.log("a+b=" ,a+b);
// console.log("a+b=" ,a+b);
// console.log("a+b=" ,a+b);
// try{
//     console.log("a+b=" ,a+c);
// }catch(err)
// {
//     console.log(err);
// }
// console.log("a+b=" ,a+b);
// console.log("a+b=" ,a+b);
// console.log("a+b=" ,a+b);


                //Asynchronous programing=>-----------------------
// =>______________________________________________-----------------

    // function hello(){
    //     console.log("hello");
    // }

    // setTimeout(hello ,4000);       // 2m => 2000ms   time

    // console.log("one");

    // setTimeout(() => {
    //     console.log("hello");
        
    // }, 4000);
        
    //  console.log("two");
    //   console.log("three");


                //Callback
//-----------------------------------------------
//----------------------------------------------- 

// function sum (a,b){
//     console.log(a+b);
// }

// function calculator(a ,b ,sumCallback){
//         sumCallback(a ,b);
// }

// calculator(1 ,2 ,sum);




//=============--------------------

// function getData(dataId ,getNextData){
//     setTimeout(() => {
//         console.log("data" ,dataId);
//         if(getNextData){
//             getNextData();
//         }
        
//     },4000);
// }

            // callback hell-----------
            //----------------------
            
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// });