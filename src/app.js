import express from 'express'; //Importar o express

const app = express() //Criar instancia do express

//Indicar para o express ler body com JSON
app.use(express.json())

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

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})



export default app;

