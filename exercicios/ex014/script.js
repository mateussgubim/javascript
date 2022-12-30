function carregar() {
  var msg = document.querySelector('#msg')
  var img = document.querySelector('#imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12){
    //BOM DIA
    img.src = './images/foto-manha.png'
  } else if(hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = './images/foto-tarde.png'
  } else {
    //BOA NOITE
    img.src = './images/foto-noite.png'
  }
}