function contar(){
  let num = document.querySelector('#txtn')
  let tab = document.querySelector('#seltab')
  if(num.value.length == 0) {
    alert('Digite um número!')
  } else {
    let n1 = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n1} x ${c} = ${n1 * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}