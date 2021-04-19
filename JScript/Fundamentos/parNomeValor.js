// par nome/Valor

const saudacao ='Opa' // contexto lexico 1

function exec() {
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhdos de pares/ valor
const cliente= {
    nome: 'Pedro',
    Idade:32,
    peso: 90,
    esndereco: {
        logadouro: ' Rua Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)