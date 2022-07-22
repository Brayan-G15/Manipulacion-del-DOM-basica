const h1  = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#button");
const pResult = document.querySelector("#result")

form.addEventListener("submit",sumarInputValue);

// function sumarInputValue(event){
//     event.preventDefault();
//     const result = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerText = "Resultado " + result;
// }


btn.addEventListener("click",sumarInputValue);

function sumarInputValue(){
    const result = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado " + result;
}