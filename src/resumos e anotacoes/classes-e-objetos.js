class formaDeBolo{
    constructor(saborDaMassa , saborDoRecheio ){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }   // criação da classe
    
    escrever(){              // podemos criar uma função aqui para imprimir uma mensagem padrao, concatenando as variaves
        console.log(`um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }
    assar(){
        console.log(`assando o bolo de ${this.saborDaMassa}`)
    }
}

let boloDaFesta = new formaDeBolo ("baunilha" , "doce de leite")  // esse é o objeto, onde dou valor para as variaveis e usamos ela
let boloExclusivo = new formaDeBolo("nuttela" , "sonho de valsa") // posso criar novos sabores (variaveis) aqui

boloDaFesta.escrever() // aqui estou chamando a variavel "boloDeFesta" junto com o valor da função "escrever"
boloExclusivo.escrever() // posso chamar a nova variavel por aqui
boloExclusivo.assar()



class phoenix{
    constructor(poderComE , poderComQ , poderComC , ultimateBm4) {
        this.poderComE = poderComE
        this.poderComQ = poderComQ
        this.poderComC = poderComC
        this.ultimateBm4 = ultimateBm4
    }

    cura(){
        console.log(`ao apertar a tecla E, ${this.poderComE} `)
    }
    smoke(){
        console.log(`ao apertar a tecla Q, ${this.poderComQ} `)
    }
    bang(){
        console.log(`ao apertar a tecla C, ${this.poderComC} `)
    }
    clone(){
        console.log(`ao apertar a o botao do Mouse, ${this.ultimateBm4} `)
    }
}

let poderes = new phoenix ("cura com uma bola de fogo" , " parede de fogo" , "bang para cegar os advensários" , "vira um clone por alguns segundos" )


poderes.cura()
poderes.smoke()
poderes.bang()
poderes.clone()