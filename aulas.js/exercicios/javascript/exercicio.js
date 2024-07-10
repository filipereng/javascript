function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png.jpg'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png.jpg'
    } else {
        img.src = 'imagens/noite.png.jpg'
    }     
}
