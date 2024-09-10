function apelido(callback, n){
    callback('Jumento e tb sou um ' + n)
}
function meuNome(nome){
    console.log(`Meu nome é ${nome}`);
}

apelido(meuNome, 'Neandertal')