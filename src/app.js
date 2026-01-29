import express from 'express'; //Importar o express

const app = express() //Criar instancia do express

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Servia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

//Criar rota padrão ou raiz
app.get('/', (req, res) =>{
    res.send('Verificando as Rotas!')
})

app.get('/selecoes', (req, res) =>{
    res.status(200).send(selecoes)
})



export default app;

