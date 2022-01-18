let res = document.querySelector('section#result')
function calcula(){
    let w1 = String(window.prompt('Qual é o nome do aluno?'))
    let w2 = Number(window.prompt(`Qual foi a primeira nota de ${w1}?`))
    let w3 = Number(window.prompt(`Qual foi a segunda nota de ${w1}`))
    res.innerHTML = `<p>Calculando a media final de ${w1}</p>`
    res.innerHTML += `<p>As notas obtidas foram ${w2} e ${w3}</p>`
    res.innerHTML += `<p>A media final será ${(w2+w3)/2}`
    if ((w2+w3)/2 > 7){
        res.innerHTML += `<p>A mensagen que temos é <strong>Você foi aprovado!</strong></p>`

    }
    else{
        res.innerHTML += `<p>A mensagen que temos é <strong>Você foi reprovado!</strong></p>`
    }

}