function verificarIdade(idade){
    let msg = 'maior'
    if (typeof(idade) != 'number'){
        throw  "A idade deve ser um valor numerico"
    }
    if(idade < 18){
        msg = 'menor'
    }
    return msg
}

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ]

  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  async function getEndereco(){
    var data =await fetch('http://viacep.com.br/ws/89080326/json/')
    data = await data.json()
    return data
 }
  
module.exports = { verificarIdade, shoppingList, myPromise, getEndereco }