// como descrito no Readme, a tabela de Níveis foi corrigida, e os valores incluem o nível "Diamante" na pontuação de XP
// todos os alternativos foram usados por mim, Jean, afim de desenvolver meu pensamento computacional.
// insira o valor na variavel XP para descobrir qual o nível:


let heroi = "tyrok O Duelista "
let xpDoHeroi = 0
let xp = [0 <=1000, 1001 <=2000, 2001 <=5000, 5001 <=6000,
6001 <=7000, 7001 <=8000, 8001 <=9000, 9001 <=10000, Infinity]
let nivel = "ferro"


if(xpDoHeroi <=1000){
     
}
else if (xpDoHeroi >1000 && xpDoHeroi <=2000){
    nivel = "bronze"
}
else if (xpDoHeroi >2000 && xpDoHeroi <=5000){
    nivel = "prata"
}
else if (xpDoHeroi >5000 && xpDoHeroi <=6000){
    nivel = "ouro"
}
else if (xpDoHeroi >6000 && xpDoHeroi <=7000){
    nivel = "Platina"
}
else if(xpDoHeroi >7000 && xpDoHeroi <=8000){
    nivel = "Diamante"
}
else if(xpDoHeroi >8000 && xpDoHeroi <=9000){
    nivel = "Ascendente"
}
else if(xpDoHeroi >9000 && xpDoHeroi <=10000){
    nivel = "Imortal"
}
else{
    nivel = "Radiante"
}


console.log("o nivel do heroi " + heroi + "é " + nivel)