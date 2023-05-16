const express = require('express');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "laura",
    password: "Agoraufmg1",
    database: "filmes",
});

app.get("/", (req, res) => {
    const sqlInsert = 
    "INSERT INTO plataformas (nome, iconURL) VALUES ('Netflix', 'exemplo');";
    db.query(sqlInsert, (err, result)=>{
        res.send("hello laura");
    });

});


app.listen(3002, () => {
    console.log("running on port 3002");
});