function display(text){
    console.log(`Display: ${text}`)
    //console.log('Display: ' + text)
}

function display2(text){
    console.log(`Display2: ${text}`)
}

/**forte acoplamento = problema */
function somar(n1, n2){
    let resultado = n1 + n2
    display(resultado)
}
somar(20,10)

/**sem acoplamento usando callback */
function subtrair(n1, n2, callback){
    let resultado = n1 - n2
    callback(resultado)
}
subtrair(20,10,display)
subtrair(20,10, display2)