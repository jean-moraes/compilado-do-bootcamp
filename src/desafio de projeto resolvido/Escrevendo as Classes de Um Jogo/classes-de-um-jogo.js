// número 1: mago
// número 2: guerreiro
// número 3: monge
// número 4: ninja
// qualquer outro número inserido, vai trazer mensagem de erro.



class hero {
    constructor(nome , idade , tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(i){
        if ( i >= 0 && i < this.tipo.length){
        let attack;
        
        switch(this.tipo[i]){
            case "guerreiro":
            attack = "espada"
            break
            
            case "mago":
            attack = "magia"
            break
            
            case "monge":
            attack = "artes marciais"
            break
            
            case "ninja":
            attack = "shuriken"
            break

            default:
                attack = "ataque indefinido";
        }
            
                console.log(`o ${this.tipo[i]} ${this.nome} atacou usando ${attack}`)
            
        } else {
            console.log("ERRO -- Por favior, insira o número correto do herói");
        }
        
    }   
}
let heroi = new hero ("tyrok" , "28" , ["guerreiro" , "mago" , "monge" , "ninja"])
heroi.atacar(0)  // -- insirir o número do heroi aqui
