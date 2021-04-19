//novo recurso do ESC2015

const pessoa = {
    nome: 'Ana' , 
    idade: 5,
    endereco: {
        logadouro: 'RUA ABC',
        numero: 100
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n , i)

const { sobrenome, BemHumorada = true} = pessoa
console.log(sobrenome, BemHumorada)

const { endereco: { logadouro, numero , cep}} = pessoa
console.log( logadouro, numero, cep)

