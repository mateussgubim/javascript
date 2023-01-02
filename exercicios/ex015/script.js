function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.querySelector('#txtano')
  var res = document.querySelector('#res')

  if(fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO]Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if(idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute('src', 'foto-bebe-m.png')
      } else if (idade >= 10 && idade < 21) {
        //JOVEM
        img.setAttribute('src', 'foto-jovem-m.png')
      } else if (idade >= 21 && idade < 50) {
        //ADULTO
        img.setAttribute('src', 'foto-adulto-m.png')
      } else if (idade >= 50 && idade < 100) {
        //IDOSO
        img.setAttribute('src', 'foto-idoso-m.png')
      } else {
        //PELÉ
        img.setAttribute('src', 'easter-egg.jpeg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'foto-bebe-f.png')
        //CRIANÇA
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute('src', 'foto-jovem-f.png')
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute('src', 'foto-adulto-f.png')
      } else if (idade < 100) {
        //IDOSO
        img.setAttribute('src', 'foto-idoso-f.png')
      } else {
        //PELÉ
        img.setAttribute('src', 'easter-egg.jpeg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
  }
}