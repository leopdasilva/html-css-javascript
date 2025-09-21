function contador () {
    let inicio = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let res = document.querySelector('div#res')

    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        res.innerHTML = 'Impossível contar! Preencha todos os campos!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando... <br>'
        let inicioval = Number(inicio.value)
        let fimval = Number(fim.value)
        let passoval = Number(passo.value)

        if (passoval <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passoval = 1
        }

        if (inicioval < fimval) {
            //Contagem crescente
            for (let i = inicioval; i <= fimval; i += passoval) {
                res.innerHTML += ` ${i} 👉 `
            }
        } else {
            //Comtagem decrescente
            for (let i = inicioval; i >= fimval; i -= passoval) {
                res.innerHTML += ` ${i} 👉 `
            }
        }
        res.innerHTML += ` 🏁 `
    }

    
}