const URL ="https://www.ibm.com/downloads/documents/us-en";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
let promise = fetch(URL);
console.log(promise);

const getFacts = async () => {
         console.log("getting data...");
          let response = await fetch(URL);
          console.log(response);  // JSON fomat
          let data  = await response.json();
          console.log(data[0].text);
          factPara.innerText = data[2].text
}; 


btn.addEventListener("click",getFacts);