let comprarOvo = true
let itemParaComprar = "leite"   // mudando essa variavel para lete ou qualquer outra coisa, vai retornar o if ou o else

if (comprarOvo) {    // a palavra if sempre remete a palavra "se"
    itemParaComprar = "leite"
    console.log("hoje vamos comer bolo pq achei o " + itemParaComprar)
} else {             // a palavra else sempre remete a palavra "se n"
    itemParaComprar = "lasanha"
    console.log("hoje vamos comer " + itemParaComprar)
}

// exercicio de if else if e else 
let nivelDeFome = 56
if (nivelDeFome <= 5) {
    console.log("você esta com pouca fome")
}
    else if (nivelDeFome <=10) {
        console.log("você esta com muita fome")
    }
    else {
        console.log("você esta ja morrendo de fome, VA COMER ")
    }

    // exemplos de switch case

    let fruta = "banana"

    switch (fruta) {
        case "laranja":
            console.log("vamos tomar suco de " + fruta)
            break
        case "banana":
            console.log("vamos tomar vitamina de " + fruta)
            break
            default: console.log("vamos tomar qualquer coisa")
    }

    // como colocar if else dentro do swicth case:
    let frutas = "banana";

switch (frutas) {
    case "laranja":
        console.log("vamos tomar suco de " + frutas);
        break;
    case "banana":
        console.log("vamos tomar vitamina de " + frutas);

        // Aqui está o if-else dentro do caso "banana".
        if (frutas === "banana") {
            console.log("Banana é uma ótima escolha!");
        } else {
            console.log("Essa não é uma banana!");
        }

        break;
    default:
        console.log("fruta desconhecida: " + frutas);
}

// exemplos de como usar o laço de repetição for
let pontosDeVIda = 0

    for( let i=1; i<=10; i++){
        pontosDeVIda+=1
        console.log("tomou uma poção magica, vc tem "+ i + " de vida")
    }
    console.log("vc está com a vida cheia, sua vida atual é " + pontosDeVIda)


// esse exemplo foi eu que fiz usando o if dentro do laço 
for(let cont=0; cont <=10; cont++){
   if(cont ===5){
    console.log("a contagem acabou aqui ")
    break
        
   }
   console.log(cont)

    }

// usando o laço de repetição while (enqunato)

let tocarMusica = 1
while(tocarMusica <=4){
    console.log("ainda pode tocar, ainda são " + tocarMusica + " da manhã")
    tocarMusica++

    // estou implementando um if no codigo para fins didáticos. 
    if (tocarMusica ===4){
        console.log("a musica deve parar já são " + tocarMusica + " da manhã ")
        break
    }
    
}

// usando agora o laço de repetição "do while" onde a palavra "do" significa "faça" e "while" significa "enquanto" então:

let i = 0
do{console.log("2 x " + i + "=" + 2*i)
i++
} while(i<=10)

    