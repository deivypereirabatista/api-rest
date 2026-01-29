import app from "./src/app.js"; //Importando a estancia app
const PORT = 3000; //Definir porta

//Escutar a porta
app.listen(PORT, ()=>{
    console.log(`Servidor Rodando na porta ${PORT}!`)
})

