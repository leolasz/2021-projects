// Armazenando funcao em variavel
const ImprimirSoma = function(a, b){
    console.log(a + b)
}
ImprimirSoma(2,3)

// armazenando uma funcao arrow em variavel
const soma = (a , b) => {
    return a + b
}

console.log(soma(2,10))

// retorno implicito
const Subtracao =  (a, b) => a - b
console.log(Subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('toppp!')