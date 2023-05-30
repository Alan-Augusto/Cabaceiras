const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require("mysql");
const util = require( "util");
const db = mysql.createPool({
    host: "localhost",
    user: "laura",
  password: "Agoraufmg1",
  database: "filmes",
});

//const db = mysql.createPool({
//    host: "localhost",
 //   user: "root",
//    password: "Aln_139157!",
//    database: "filmes",
//});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.post('/home/', (req, res) => {
    
    const usuario = req.body.usuario;
    const texto = req.body.texto;
    const nota = req.body.nota;
    const fotoUsuario = req.body.fotoUsuario;
    const filme = req.body.filme;
    
    const sqlInsertCriticas = "INSERT INTO criticas (usuario, texto, nota, fotoUsuario, filme) VALUES (?,?,?,?,?);";
    db.query(sqlInsertCriticas, {usuario, texto, nota, fotoUsuario, filme} ,(err, result) =>{
        res.send(result);
    });
});

app.get('/criticas/', (req, res) => {
    const sqlGetCriticas = "SELECT * FROM criticas WHERE filme = ?";
    db.query(sqlGetCriticas, (err, result) =>{
        res.send(result);
    });
});

app.get('/home/', (req, res) => {
    const sqlSelect = "SELECT * FROM filme";
    db.query(sqlSelect, (err, result) =>{
        if (err) return res.status(500).json(err);
        res.send(result);
    });
});

app.post("/admin/", (req, res) => {
    var id; 
    const nome = req.body.nome;
    const fotoURL = req.body.fotoURL;
    const ano = req.body.ano;
    const duracao = req.body.duracao;
    const genero = req.body.genero;
    const nacionalidade  = req.body.nacionalidade;
    const idioma = req.body.idioma;
    const classificacao = req.body.classificacao;
    const diretor = req.body.diretor;
    const sinopse = req.body.sinopse;
    
    const netflix = req.body.netflixBD;
    const globoPlay = req.body.globoPlayBD;
    const primeVideo = req.body.primeVideoBD;
    const hboMax = req.body.hboMaxBD;
    const disney = req.body.disneyBD;
    const star = req.body.starBD;


    const query = util.promisify(db.query).bind(db);

    (async () => {
        try {
            await query (
                "INSERT INTO filme (nome, fotoURL , ano, duracao, genero, nacionalidade, idioma, classificacao, diretor, sinopse) VALUES('" +
                     nome + "','" +
                     fotoURL + "'," +
                     ano + "," +
                     duracao + ",'" +
                     genero  + "','" +
                     nacionalidade   + "','" +
                     idioma   + "'," +
                     classificacao  + ",'" +
                     diretor + "','" +
                     sinopse  + "')" 
                
            )
            
        } finally {
            (async () => {
                try{
                    const result = await query ( "SELECT id FROM filme WHERE nome = '" + nome + "'");
                    id = result[0].id;
                
            } finally{
                if (netflix) {
                    db.query("INSERT INTO conexoes (filme, plataforma) values (?,?)", [id, 1], (err) => {
                        if (err) return res.status(500).json(err);
                        
                    })
                }
                if (globoPlay) {
                    db.query("INSERT INTO conexoes (filme, plataforma) values (?,?)", [id, 2], (err) => {
                        if (err) return res.status(500).json(err);
                        
                    })
                }
                if (primeVideo) {
                    db.query("INSERT INTO conexoes (filme, plataforma) values (?,?)", [id, 3], (err) => {
                        if (err) return res.status(500).json(err);
                       
                    })
                }
                if (star) {
                    db.query("INSERT INTO conexoes (filme, plataforma) values (?,?)", [id, 4], (err) => {
                        if (err) return res.status(500).json(err);
                        
                    })
                }
                if (disney) {
                    db.query("INSERT INTO conexoes (filme, plataforma) values (?,?)", [id, 5], (err) => {
                        if (err) return res.status(500).json(err);
                        
                    })
                }
                if (hboMax) {
                    db.query("INSERT INTO conexoes (filme, plataforma) values (?,?)", [id, 6], (err) => {
                        if (err) return res.status(500).json(err);
                       
                    })
                }




            }})();
        } 
    })();
    return res.status(200).json("Conexão criada");


});




app.listen(3002, () => {
    console.log("running on port 3002");
});