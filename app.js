const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");

// const dbName = 'employees';

const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "carlos",
  password: "C@rlos1234",
  database: "node_teste",
});

con.connect();

// app.set("views", path.join(__dirname, "views"));

// app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
const middleware = async(req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")

  next()
}

app.use(express.json());

app.use(cors());
app.use(middleware)
app.listen(8000, () => console.log("Conectando na porta 8000"));

app.get("/", function (req, res) {});

app.get("/api/data", async function (req, res) {

  const data = con.query("SELECT * FROM users", (err, result, fields) => res.status(200).json(result));
  //res.status(200).json(data)
  
});


