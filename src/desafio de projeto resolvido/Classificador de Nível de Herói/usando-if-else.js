// como descrito no Readme, a tabela de Níveis foi corrigida, e os valores incluem o nível "Diamante" na pontuação de XP
// todos os alternativos foram usados por mim, Jean, afim de desenvolver meu pensamento computacional.
// insira o valor na variavel XP para descobrir qual o nível:


let heroi = "Tyrok O Duelista"
let xp = 0

if(xp <=1000){
        console.log("o Herói " + heroi + " está no nível Ferro")
 } 
    else if(xp >1000 && xp <=2000){
        console.log("o Herói " + heroi + " está no nível Bronze")
    }
    else if(xp >2000 && xp <= 5000){
        console.log("o Herói " + heroi + " está no nível Prata")
    }
    else if(xp >5000 && xp <= 6000){
        console.log("o Herói " + heroi + " está no nível Ouro")
    }
    else if(xp >6000 && xp <= 7000){
        console.log("o Herói " + heroi + " está no nível Platina")
    }
    else if(xp >7000 && xp <=8000){
        console.log("o Herói " + heroi + " está no nível Diamante")
    }
    else if(xp >8000 && xp <= 9000){
        console.log("o Herói " + heroi + " está no nível Ascendente")
    }
    else if(xp >9000 && xp <=10000){
        console.log("o Herói " + heroi + " está no nível Imortal")
    }
    else
        (console.log("o Herói " + heroi + " está no nível Radiante"))