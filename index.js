function carregar(){
let msg = document.getElementById('msg')
let foto = document.getElementById('foto')
let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()

if (hora >= 6 && hora <= 12){
    foto.src = 'imagens/manha.jpg'
    msg.innerHTML = `Bom dia ${hora}:${min}`

}else if (hora > 12 && hora <= 18){
    foto.src = 'imagens/tarde.jpg'
    msg.innerHTML = `Boa tarde ${hora}:${min}`
}else{
    foto.src = 'imagens/noite.jpg'
    msg.innerHTML = `Boa noite ${hora}:${min}`
}
}




