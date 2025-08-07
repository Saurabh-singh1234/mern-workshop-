//  id
// let heading = document.getElementById("heading");
// console.dir(heading);

// class

// let headings = document.getElementsByclassName("headings");
// console.dir(headings);


// let ele1 =document.querySelector("p")
// console.dir(ele1);

// let allele =document.querySelectorAll("p")
// console.dir(allele);

// let ele1 =document.querySelector(".myclass")
// console.dir(ele1);


// let div = document.querySelector("div")
//     console.dir(div)


// let h2 = document.querySelector("h2")
//     console.dir(h2.innerText)

//  h2.innerText= h2.innerText+  "saurabh"

// let divs = document.querySelectorAll(".box")
//     console.log(divs[0])

// divs[0].innerText = "new box 1"
// divs[1].innerText = "new box 2"
// divs[2].innerText = "new box 3"

// let idx = 1;
// for(div of divs){
//     div.innerText = 'new value ${idx}';
//     idx++;
// }


//  let div = document.querySelector("div")
// div.style.backgroundColor ="red";
// div.style.fontSize = "20px"
//  div.style.visibility ="hidden"

// div.innerText ="hello"


//  let newBtn =document.createElement("button");
//  newBtn.innerText = " click me";
//  console.log(newBtn);
 



// let div =document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);

// div.after(newBtn);

// let para =document.querySelector("p");
// para.remove();

        // create a button
// let newBtn = document.createElement("button");
// newBtn.innerText="click me";
// newBtn.style.color="bleck";
//  newBtn.style.backgroundColor="red";
 
// document.querySelector("body").prepend(newBtn);



// let btn1= document.querySelector("button");
// btn1.onclick = ()=> {
//     console.log("you inside");
//     let a=25;
// a++;
// console.log(a);
// };

            // object Event 
                            
// let btn1= document.querySelector("button");

// btn1.onclick = (evt)=> {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);

// };

//  let modebtn = document.querySelector("button") 
//  let body = document.querySelector("body")
//   let currMode ="light";

//   modebtn.addEventListener("click",()=>{ 
//         if(currMode === "light"){
//                 currMode="dark";
//                  body.classList.add("dark");
//                document.querySelector("body").style.backgroundColor="black";
//         }
//         else{
//                 currMode ="light"
//                 body.classList.add("light");
//                 document.querySelector("body").style.backgroundColor="white";

//         }
//         console.log(currMode);
//   });