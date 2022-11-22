const express = require("express")
const router = express.Router()
const path = require("path")

const basePath = path.join(__dirname, '../templates')


router.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/logado.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body);
 
    const name = req.body.name;
    const password = req.body.password;
 
     console.log(`O nome do usuário é ${name} e a senha é ${password}`);
    res.sendFile(`${basePath}/logado.html`);
 
 })

module.exports = router;