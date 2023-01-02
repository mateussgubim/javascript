function carregar() {
  var msg = document.querySelector('#msg')
  var img = document.querySelector('#imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12){
    //BOM DIA 70bff8
    img.src = './images/foto-manha.png'
    document.body.style.background = '#70bff8'
  } else if(hora >= 12 && hora <= 18) {
    //BOA TARDE a56e45
    img.src = './images/foto-tarde.png'
    document.body.style.background = '#a56e45'
  } else {
    //BOA NOITE 362a47
    img.src = './images/foto-noite.png'
    document.body.style.background = '#362a47'
  }
}