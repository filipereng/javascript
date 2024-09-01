let nomes = {
    nome: 'ana',
    idade: 20,
    endereço: {
        rua: 'josé benedito',
        casa: 1,
        bairro: 'tupy'
    }
}

function teste(){
    return ['Minha idade é...', 30]
}
let [string, numero] = teste()
console.log(string, numero);
