function contar1() {
  var num1 = Number(document.querySelector('#num1').value)
  var num2 = Number(document.querySelector('#num2').value)
  var num3 = Number(document.querySelector('#num3').value)
  var res = document.querySelector('#res')

  for (c = num1; c <= num2; c = c + num3) {
    res.innerHTML = 'Contando...'
    res.innerHTML += c
  }
}

function contar(){
  let ini = document.querySelector('#txti')
  let fim = document.querySelector('#txtf')
  let passo = document.querySelector('#txtp')
  let res = document.querySelector('#res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    //alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      alert('Passo inválido! Considerando passo 1')
      p = 1
    }

    if (i < f) {
      //Contagem crescente
      for (c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
      //Contagem regressiva
    } else {
      for (c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `${c} \u{1F3C1}`
  }
}