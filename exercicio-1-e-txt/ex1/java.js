

function soma(){
    let num1,num2,soma = 0;
    num1 = Number(window.prompt('Digite um numero'))
    num2 = Number(window.prompt('Digite outro numero'))
    soma = num1 + num2

    document.getElementById('resultado').innerHTML = `A soma entre ${num1} e ${num2} e igual a ${soma}`  

}