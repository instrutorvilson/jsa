/**objeto javascript */
contato = {nome: 'maria', email:'maria@gmail.com',fone:'(47)-9087-9087'}
console.log(contato.nome)
console.log(contato.email)
console.log(contato.fone)

//contatoJson = {'nome': 'maria', 'email':'maria@gmail.com','fone':'(47)-9087-9087'}
/**Stringify converte objeto para json */
contatoJson = JSON.stringify(contato)
console.log(contatoJson)
console.log(contatoJson.nome)

/**parse converte JSon para objeto */
contatoObj = JSON.parse(contatoJson)
console.log(contatoObj.nome)