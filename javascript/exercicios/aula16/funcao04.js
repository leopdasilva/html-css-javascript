//5! = 5 * 4 * 3 * 2 * 1

function fatorial(n) {
    let fat = 1;
    let calculo = "";
    
    for (let c = n; c > 0; c--) {
        fat *= c;
        if (c > 1) {
            calculo += c + " x ";
        } else {
            calculo += c;
        }
    }
    
    console.log(calculo);
    return fat;
}

console.log("5! = " + fatorial(5));

