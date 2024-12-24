let nomeDoHeroi = "Lenda"
let vitoria = 105
let derrota = 1
let nivel;
let resultado = obterSaldoDeRankeadas(vitoria, derrota);

function obterSaldoDeRankeadas(vitoria, derrota){
    return vitoria - derrota
}

if (resultado <=10) {
    nivel = "Ferro"
} else if (resultado <=20){
    nivel = "Bronze"
} else if (resultado <=50){
    nivel = "Prata"
} else if (resultado <=70){
    nivel = "Ouro"
} else if (resultado <=80){
    nivel = "Diamante"
}else if (resultado <=100){
    nivel = "Lendário"
} else{
    nivel = "Imortal"
}
console.log(`O heroi ${nomeDoHeroi} tem saldo de vitorias: ${resultado} está no nivel de: ${nivel}.`)