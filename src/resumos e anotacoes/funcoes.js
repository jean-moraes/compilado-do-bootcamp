// function é uma função que faz alguma coisa, executa uma ação  , como uma torradeira que tem a função de torrar, pao entra cru e sai torrado.


function exemplo(){                      //fiz tres funcoes com determinadas frases distintas para identificar cada uma delas
    console.log("isso é uma funcao")
}

function coletardados(){
    console.log("estou coletando dados")
}

function recusarDados(){
    console.log("estou recusando dados")
}

function main(){             // aqui é uma função main, muito usada para agrupar outras funções para ela, dentro dela está as outras 3 funções acima
    exemplo()
    coletardados()
    recusarDados()
}   

let numero = 2  
                                // coloquei uma variavel e iniciei um if para verificar qual funcao sera chamada de acordo com o valor da variavel, 
if( numero < 3){                // observe que quando o numero é maior que 3, o else if chama todas as funcoes com a funcao main.
    coletardados()              // para chamar a funcao é só colocar o nome dela com os colchetes, funcao dentro de função é comum
} else if (numero === 3) {
    recusarDados()
} else if (numero > 3){
    main()
}


// agora vamos usar parâmetros dentro ed uma funcção
// parametros dentro da função serve para dar diferentes valores a mesmo função usando uma variavel

function carro(carro){  // dentro do colchetes esta o nome da variavel
    console.log("esse carro é da cor " + carro)
}

carro("azul") // aqui quando eu chamo a função eu acrescento dentro do parenteses o valor da variavel 
              // assim posso alterar o valor da variavel toda vez que eu chamar a função

carro("amarelo")

console.log("meu " + carro) // eu nao posso chamar essa variavel sozinha quando esta fora dos {} da função, pois ela nao existe fora dos parenteses
                            // posso apenas chamar a funcao com a variavel

carro()  // uma funcao com parametro eu devo sempre colocar o valor da variavel desejada para chamar ela, se eu chamar a funcao sem adicionar nenhum parametro ela vai ficar como undefined

// tbm nao posso declarar uma variavel let fora da funcao e chama-la dentro da funcao por ex:

let mesas = "madeiras"
sala()

function sala(){
    console.log(mesas)
}

// isso porque let não é reconhecido dentro da funcao, pra isso devo usar "var" em vez de "let"

var mesa // note que eu declarei a variavel fora da função mas adicionei valor a ela dentro do escopo da função
sala()

function sala(){
    mesa ="madeira"
    console.log(mesa)
}

//posso adicionar mais de 1 parametro para a mesma função por ex:

carro("vermelha " , "jean")

function carro(cor , nome){
    console.log("esse carro é da cor " + cor + "e seu proprietário é o " + nome)
}

// se eu nao declarar o parametro na chamada da função ela vasi retornar um valor defalt. ex:

torradeira("3" , "32.90") // chamada da funçao

function torradeira (mesa , valor , nome) {
    console.log(`o numero da mesa é ${mesa}`)
    console.log(`o valor é ${valor}`)
    console.log(`o pedido é do ${nome}`)
}

// ou posso declarar o valor padrao da variavel dentro da função quando nao coloco seu valor na chamada da funcão por ex:

torradeira("3" , "32.90") // chamada da funçao

function torradeira (mesa , valor , nome = "cliente") {
    console.log(`o numero da mesa é ${mesa}`)
    console.log(`o valor é ${valor}`)
    console.log(`o pedido é do ${nome}`)
}
 // posso tambem colocar o valor tanto na chamada da função quanto dentro e o valor que predomina é o de fora

 torradeira("3" , "32.90" , "jean")

 function torradeira (mesa , valor , nome = "cliente") {
    console.log(`o numero da mesa é ${mesa}`)
    console.log(`o valor é ${valor}`)
    console.log(`o pedido é do ${nome}`)
}

// o valor que nao esta definido tem que ficar sempre por ultimo, caso contrario tem q usar a palavra "undefined" por ex:

torradeira("3" , undefined , "32.90") // chamada da funçao

function torradeira (mesa , valor , nome) {
    console.log(`o numero da mesa é ${mesa}`)
    console.log(`o valor é ${valor}`)
    console.log(`o pedido é do ${nome}`)
} // nao é uma boa prática


// agora vamos uar uma função com retorno, primeiro uma função sem retorno:

multiplicacao(5 , 10)

function multiplicacao (numA , numB){
    resultado = numA * numB
    console.log(resultado)

}

// agora vamos adicionar um retorno para essa função usando a palavra "return"

let resultadoFinal = multiplicacao(5 , 10) // atribuo um variavel para a chamada da função, que vai guardar o "resultado" dentro da variavel "resultadoFinal"

function multiplicacao (numA , numB){
    resultado = numA * numB   // guardo a equação dentro da variavel "resultado"
    return resultado          // vai retornar o "resultado" para a chamada da função "multiplicação"

} // **ou seja, o retorno dessa função vai ser armazenada em uma variável.**

console.log(resultadoFinal)


let resultadoFinal2 = multiplicacao(5 , 10) 

function multiplicacao (numA , numB){  
    return numA * numB          

} 

console.log(resultadoFinal2)

// usando um exemplo de um cliente colocar o nome inteiro mas quero apenas o primeiro nome


let insertName = getFirstName("jean christian de moraes")

function getFirstName(name) {
    let firstName = name.split(" ")[1]  // o "split" tem a função de dividir o valor da variavel e colocar dentro de um vetor, determinando qual o criterio para dividir as palavras, nesse caso é  espaço " " e eu passo qual posição do vetor quero pegar
    return firstName
    
}

console.log(`bem vindo ${insertName}`)


// usando agora o "spliCHar" como uma variavel, e na chamada da função eu determino qual o criterio de corte para cada caso, "-" e " "

let userName = getFirstName("jean-christian-de-moraes" , "-")
        console.log(`bem vindo ${userName}`)
    userName = getFirstName("edna dos santos moraes", " ")
        console.log(`bem vindo ${userName}`)

function getFirstName(name , slpitChar) {
    let firstName = name.split(slpitChar)[0]  
    return firstName
    
}



