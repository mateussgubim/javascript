function contar() {
  var num1 = Number(document.querySelector('#num1'))
  var num2 = Number(document.querySelector('#num2'))
  var num3 = Number(document.querySelector('#num3'))
  var res = document.querySelector('#res')

  for (c = num1; c <= num2; c = c + num3) {
    res.innerHTML = 'Contando...'
    res.innerHTML += c
  }
}