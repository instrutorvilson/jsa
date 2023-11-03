const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

const contatos = [
  { id: 1, nome: "maria", email: "maria@gmail.com", fone: "123" },
];

app.get("/contatos", (req, res) => {
  res.status(200).send(contatos);
});

app.post("/contatos", (req, res) => {
  const obj = {
    id: contatos.length+1,
    nome: req.body.nome,
    email: req.body.email,
    fone: req.body.fone,
  };
  contatos.push(obj)
  res.status(201).send(obj);
});

app.get("/contatos/:id", (req, res) => {
    var contato = ''
    for(const ct of contatos){
        if(ct.id == req.params.id){
           contato = ct
           break
        }
    }
    console.log(contato)
    if (contato != '')
       res.status(200).send(contato);
    else
      res.status(404).send("Contato não encontrado")
  });

  app.put("/contatos/:id", (req, res) => {
    var contato = ''
    for(const ct of contatos){
        if(ct.id == req.params.id){
           ct.nome = req.body.nome
           ct.email = req.body.email
           ct.fone = req.body.fone
           contato = ct
           break
        }
    }
    console.log(contato)
    if (contato != '')
       res.status(200).send(contato);
    else
      res.status(404).send("Contato não encontrado")
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
