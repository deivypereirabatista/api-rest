const express = require('express') //Importar o express
const app = express() //Criar instancia do express
const port = 3000 //Definir a porta

//Criar rota padrão ou raiz
app.get('/', (req, res) =>{
    res.send('Verificando as Rotas!')
})


//Escutar a porta
app.listen(port, ()=>{
    console.log(`Servidor Rodando na porta ${port}!`)
})
