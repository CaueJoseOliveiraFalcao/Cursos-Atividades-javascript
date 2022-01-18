let cont = 0 
let res = document.querySelector('section#result')

function soma(){
    cont ++
    res.innerHTML =  `<p>o contador esta com ${cont} cliques<p>`
}

function zera(){
    cont = 0 
    res.innerHTML = null
}