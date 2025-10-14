function adicionar() {
    var num = document.getElementById('txtnum')
    var lista = document.getElementById('lista')
    var valor = Number(num.value)

    if (valor >= 1 && valor <= 100) {
        var option = document.createElement('option')
        option.text = valor
        lista.add(option)
        num.value = ''
        num.focus()
    } else {
        alert('Por favor, insira um número entre 1 e 100.')
    }
}

function finalizar() {
    var lista = document.getElementById('lista')
    var res = document.getElementById('res')

    if (lista.length == 0) {
        alert('Adicione valores antes de finalizar.')
        return
    }

    var total = 0
    var valores = []
    for (var i = 0; i < lista.length; i++) {
        var val = Number(lista.options[i].text)
        valores.push(val)
        total += val
    }

    var qtd = valores.length
    var maior = Math.max.apply(null, valores)
    var menor = Math.min.apply(null, valores)
    var media = total / qtd

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${qtd} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${total}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}
