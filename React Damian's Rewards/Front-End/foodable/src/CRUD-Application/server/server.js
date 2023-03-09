const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
host: "localhost",
user: "root",
password: "16524316",
database: "foodable",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {

    res.send("hello");
});

app.listen(3001, () => {
console.log("running on port 3001");
});


app.get('/api/get', (req, res) => {
const sqlSelect =
"SELECT Points FROM donator WHERE Name = 'Ana'"
db.query(sqlSelect, (err,result) => {
    //console.log(result);
res.send(result);
    });  

});

app.post("/api/insert", (req, res) => {

const Name = req.body.name;
const Surname = req.body.surname;


const sqlInsert = "INSERT INTO donator (Name, Surname) VALUES (?,?)"
db.query(sqlInsert, [Name, Surname], (err,result) => {
console.log(result);
});  

});




