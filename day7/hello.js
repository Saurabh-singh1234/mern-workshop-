 // destructuring

//  const arr ={"one":"hello" ,"two":"my" ,"three":"bye"}
 // const one =arr[0]

//  const {one ,two ,three }=arr
//  console.log(one)
//  console.log(two)
//  console.log(three)

//  const hello =[1,2,5]
//  const [d,f] =hello

//  console.log(d)
//  console.log(f)


// const obj ={"student":"RBMI",
//         "marks":{
//             "maths":45,
//             "React":50
//         },
//         "location":"up"
// }
// console.log(obj.student)
// console.log(obj.marks)
// ]

// const{marks:{maths,React}}=obj
// console.log(obj);
// console.log(student);
// console.log(maths);
// console.log(React);



// const fun =({...ages})=>{  //..rest operator
//     console.log(ages)
  
// }
// fun({"age":"34","age1":23})



//------------------   Spread  operator-------------


// const arr =[1,2,4,6]
// const arr1 =[2,4,6,8,8]
// console.log([...arr,...arr1]);



// const arr =[1,2,4,6]
// const copy =[...arr]   //shallow copy

// console.log(copy);
// copy[0]=9
// console.log(copy);
// console.log(arr);



//--------------

// const arr1 ={1:"r",2:"r",3:{"fd":"jh"}}
// const copy1 ={...arr1}
// console.log(copy1)
// copy1[3["fd"]]="three"
// console.log(copy1)
// console.log(arr1);





// const arr1 =[{1:"one",2:"two"},
//         {3:"three",4:"four"}
//      ]
// const co=[...arr1]
// console.log(co);
// console.log(arr1);
// co[0]="hello"
// co[1]="bye"



// console.log(co)
// console.log(co)


// const co =JSON.parse(JSON.stringify(arr1))
// co[0]["1"]="three"
// console.log(co[0]["I"])
// console.log(co)



// const fun =(...one)=>{
//     console.log(one)
    // console.log(b)
    // console.log(c)
    // console.log(d)

// }
// fun (one="one" ,two="two")



// const arr=[1,2,3,4,5]
// const [one ,two,...three,t]=arr
// console.log(one)
// console.log(two)
// console.log(three)



// const obj={one:"hello",two:"hii",three:"bye"}
// const {one,...h}=obj
// console.log(one)
// console.log(h)



// console.log(`hello
//     bye
//    my `) 


// let a=2
// let b=3
// console.log(`a value is ${a} b is value  ${b}`);


const  fun=(string,value)=>{
        console.log()
}