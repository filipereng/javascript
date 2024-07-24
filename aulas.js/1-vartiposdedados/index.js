let dados = {
    nome: 'filipe',
    sobrenome: 'ribeiro',
    idade: 30,
    endereço: {
        rua: 'josé benedito',
        casa: 1,
        bairro: 'tupy',
        cpf: '421.083.138-77'
    }
}
dados.nome = 'Ana' // ADICIONANDO NOVOS DADOS
dados.altura = 162 // ADICIONANDO NOVOS DADOS
dados.idade = 21 // ADICIONANDO NOVOS DADOS

console.log(dados.idade) // MOSTRANDO APENAS 1 DADOS

console.log(`${JSON.stringify(dados)}`) // AQUI MOSTRA TODOS OS DADOS E OS QUE FORAM ADICIONADOS!

console.log(`o ${dados.nome} tem ${dados.idade} anos sua altura é ${dados.altura}, e seu cpf é ${dados.endereço.cpf}.`) // AQUI MOSTRA 1 DADOS POR VEZ
console.log(`o ${dados.nome} tem ${dados.idade} anos, e mora no endereço ${JSON.stringify(dados.endereço)}.`) // UM DADOS POR VEZ E DEPOIS TODOS COM JSON.STRINGIFY

