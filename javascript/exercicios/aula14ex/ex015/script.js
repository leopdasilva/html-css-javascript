function contador () {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        res.innerHTML = 'Impossível contar! Preencha todos os campos!';
        return;
    }

    var inicioval = Number.parseInt(inicio.value)
    var fimval = Number.parseInt(fim.value)
    var passoval = Number.parseInt(passo.value)

    res.innerHTML = '' 

    if (passoval <= 0) {
        window.alert('Passo inválido, considerando PASSO 1')
    } else {
        for (var i = inicioval; i <=  fimval; i += passoval) {
           res.innerHTML += `${i} 👉` 
        }
        res.innerHTML += `🏁` 
    }
    
}