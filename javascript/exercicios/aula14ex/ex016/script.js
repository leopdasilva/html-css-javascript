function tabuada() {
    var tab = window.document.getElementById('txttab')
    var res = document.getElementById('campo-tabuada')

    if (tab.value.length == 0) {
        window.alert('Por favor, digite um número!')
        return;
    }

    res.innerHTML = ''
    var tabval = Number.parseInt(tab.value)
    var mult = 0

    for (var i = 1; i <= 10; i++) {
        mult = tabval * i
        res.innerHTML += `${tabval} x ${i}  = ${mult}\n`
    }
}