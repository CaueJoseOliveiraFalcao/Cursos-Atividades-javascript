function calcular(){
    let num  = Number(window.prompt("Digite um numero"))

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O numero a ser analizado aqui será o 
    <strong>${num}</strong></p><hr>`
    res.innerHTML += `<p>O seu valor absoluto e ${parseInt(num)}</p>`
    res.innerHTML += `<p>A sua parte inteira e ${parseInt(num)}</p>`
    res.innerHTML += `<p>O valor inteiro mais proximo e ${Math.round(num)}</p>`
    res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(num)}</p>`
    res.innerHTML += `<p>A sua raz cubica e ${Math.cbrt(num)}</p>`
    res.innerHTML += `<p>O valor de ${num}<sub>2</sub> e ${num * num}</p>`
    res.innerHTML += `<p>O valor de ${num}<sub>3</sub> e ${num * num * num}</p>`
}