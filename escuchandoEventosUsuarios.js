const h1 =document.querySelector("h1");
const input1 =document.querySelector("#calculo1");
const input2 =document.querySelector("#calculo2");
const btn = document.querySelector("#result");
const pResult =document.querySelector("#resultadoSuma");





function btnOnClick (){
    //console.log(input1.value + input2.value);
    const num1 =Number(input1.value);
    const num2 =Number(input2.value);  
    const suma= num1+num2;
    pResult.innerText = suma;
}


