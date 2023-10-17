// como descrito no Readme, a tabela de Níveis foi corrigida, e os valores incluem o nível "Diamante" na pontuação de XP
// todos os alternativos foram usados por mim, Jean, afim de desenvolver meu pensamento computacional.
// insira o valor na variavel XP para descobrir qual o nível:


let heroi = "Tyrok O Duelista"
let xp = 0

switch(true) {
    case xp <=1000:
        console.log("o Herói " + heroi + " está no nível Ferro")
            break
        case xp >1000 && xp <=2000:
        console.log("o Herói " + heroi + " está no nível Bronze")
            break
        case xp >2000 && xp <=5000:
            console.log("o Herói " + heroi + " está no nível Prata")
            break
        case xp >5000 && xp <=6000:
            console.log("o Herói " + heroi + " está no nível Ouro")
        case xp >6000 && xp <=7000:
            console.log("o Herói " + heroi + " está no nível PLatina")
            break
        case xp >7000 && xp <=8000:
            console.log("o Herói " + heroi + " está no nível Diamante")
            break
        case xp >8000 && xp <=9000:
            console.log("o Herói " + heroi + " está no nível Ascendente")
            break
        case xp >9000 && xp <=10000:
            console.log("o Herói " + heroi + " está no nível Imortal")
            break
        case xp >10000:
            console.log("o Herói " + heroi + " está no nível Radiant")
            break

}