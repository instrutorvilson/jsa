function sum(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
  } 
  
  function divisao(a, b) {
    if(b==0){
        throw  "Um numero não pode ser dividido por Zero."
    }
    return a / b;
  } 


module.exports = {sum, subtracao, divisao}