const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "laura",
    password: "Agoraufmg1",
    database: "filmes",
});
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get('/home/', (req, res) => {
    const sqlSelect = "SELECT * FROM filme";
    db.query(sqlSelect, (err, result) =>{
        res.send(result);
    });
});

app.post("/admin/", (req, res) => {
    
    const nome = req.body.nome;
    const ano = req.body.ano;
    const duracao = req.body.duracao;
    const genero = req.body.genero;
    const nacionalidade  = req.body.nacionalidade;
    const idioma = req.body.idioma;
    const classificacao = req.body.classificacao;
    const diretor = req.body.diretor;
    const sinopse = req.body.sinopse;
    const fotoURL = req.body.fotoURL;

    const sqlInsert = "INSERT INTO filme (nome, fotoURL , ano, duracao, genero, nacionalidade, idioma, classificacao, diretor, sinopse) VALUES (?,?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [nome, fotoURL, ano, duracao, genero,
         nacionalidade, idioma, classificacao, diretor, sinopse], (err, result) =>{
        console.log(result);
    });

});


app.listen(3002, () => {
    console.log("running on port 3002");
});