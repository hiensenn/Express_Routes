const express = require("express");
const app = express();
const port = 5000;

const path = require("path");

const users = require("./users") 

//lendo body

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//arquivos estaticos 
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/login.html`)
})



app.listen(port, () =>{
    console.log(`rodando na porta ${port}`)
})
