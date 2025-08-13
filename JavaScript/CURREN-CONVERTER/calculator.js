const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const  dropdowns = document.querySelectorAll(".dropdown select");

// for (code in countryList) {
//     console.log(code ,countryList[code]);
// }

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        if(select.name==="form" && currCode=== "USD"){
            newOption.selected= "selected";
        }else if(select.name==="to" && currCode=== "INR"){
            newOption.selected= "selected";
        } 
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag =(element)=>{
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
        let img =element.parentElement.querySelector("img");
        img.src = newSrc;
};


btn.addEventListener("click" ,(evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amVal = amount.value;
    if(amVal ===""|| amVal<1){
        amVal = 1;
        amount.value = "1";
    } 
    
});