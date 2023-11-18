async function ler(){
   var data =await fetch('http://viacep.com.br/ws/89080326/json/')
   data = await data.json()
   console.log(data)
   return data
}

ler()