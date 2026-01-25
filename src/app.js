const express = require('express');
const app = express()
const port = 3000

//Criar rota padrão ou raiz
app.get('/', (req, res) =>{
    res.send('Verificando Rota')
})


//Escutar a porta
app.listen(port, ()=>{
    console.log(`Servidor Rodando na porta ${port}!`)
})