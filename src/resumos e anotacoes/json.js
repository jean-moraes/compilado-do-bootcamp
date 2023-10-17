
// aqui temos um exemplo de nota de dados de compra de produtos usando função e variaveis.

var name = "jean"
var age = 29
var products = ["webcam top ", "microfone fifine", "headset xpg "]
var value = [210 , 550 , 430]

notaFiscal(name,age, products, value)

function notaFiscal(name, age, products, value) {
    console.log(`o nome do comprador: ${name}`)
    console.log(`a idade do comprador: ${age}`)
    console.log(`o produto: ${products[0]}`)
    console.log(`o valor do produto: ${value[0]}`)
}


// aqui substituimos as variaveis com uma estrutura Json que serve como um "pote" para transportar todos os dados dentro dele para outro lugar

let taxDatas = {
    name: "jean",
    age: 29,
    products: {
        a: ["webcam top ", 210],
        b: ["microfone fifine", 550],
        c: ["headset xpg " , 430]
    }
}

// e aqui temos a implementação do primeiro codigo, mas excluindo as variaveis e armazenando todas elas dentro do Json, assim consigo incrementar elas dentro da função e chama-las depois.

notaFiscal(taxData)

function notaFiscal(taxData) {
    console.log(`o nome do comprador: ${taxData.name}`)
    console.log(`a idade do comprador: ${taxData.age}`)
    console.log(`o produto: ${taxData.products}`)
    
}

// a lista de produtos aparece como "object, object" quando rodo o codigo, para resolver isso temos que fazer a desestruturação da seguinte forma usando o For:
let taxData = {
    name: "jean",
    age: 29,
    products: {
        a: ["webcam top", 210],
        b: ["microfone fifine", 550],
        c: ["headset xpg" , 430],
        d: ["tv de 50 polegadas" , 2300]
    }
}

notaFiscal(taxData)

function notaFiscal(taxData) {
    console.log(`o nome do comprador: ${taxData.name}`)
    console.log(`a idade do comprador: ${taxData.age}`)

     for (let index in taxData.products) {                  // essa linha é padrao usar o for in para desestruturar um objeto dentro de um json 
       let [productsName, productsValue] = taxData.products[index];   //idem
            
       console.log(`o produto: ${productsName} e custa R$ ${productsValue}`)   // dessa forma posso adicionar quantos produtos eu quiser no meu json sem mudar a estrutura do for
     }
}




