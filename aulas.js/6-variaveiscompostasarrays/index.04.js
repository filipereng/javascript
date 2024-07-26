var nomes = ['filipe', ' ana', ' julia', ' ju', ' alex']

console.log('Aqui mostra quantos convidados tem na lista que são ' + nomes.length) //VARIAVEL.LENGTH MOSTRA O NUMEOR DE VETORES

console.log(`Os nome dos convidados são ${nomes}`, 'e agora vou chamar o zé o sexto convidado')

nomes[5] = ' zé' + ' e' // ADICIONADO O ZÉ COMO 5 VETOR DE FORMA ESPECIFICA
nomes.push(' zézinho') // ADICIONADO O ZÉZINHO O 6 VETOR
// nomes.shift() ELIMINA O PRIMEIRO CONVIDADO/VETOR DO ARRAY
// delete nomes[0] DELETA O ITEM NA SUA POSIÇÃO

console.log(`O ${nomes[5]} é o 6 convidado adicionado na lista e o sexto vetor`)

console.log(`Minha nova lista com o zé e zézinho adicionados é ${nomes} e agora são ${nomes.length} convidados`)

nomes.pop() // RETIRAR O ULTIMO ELEMENTO/VETOR DA LISTA
