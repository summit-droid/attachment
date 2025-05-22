const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const db = new sqlite3.Database('./db/users.db');

app.use(bodyParser.json());
app.use(express.static(__dirname));

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTEGER,
  gender TEXT,
  contact TEXT,
  username TEXT,
  password TEXT
)`);

app.post('/add-user', (req, res) => {
  const { name, age, gender, contact, username, password } = req.body;
  console.log("Incoming registration data:", req.body); //  Debug

  if (!name || !age || !gender || !contact || !username || !password) {
    return res.status(400).send("All fields are required");
  }

  db.run(
    `INSERT INTO users (name, age, gender, contact, username, password) VALUES (?, ?, ?, ?, ?, ?)`,
    [name, age, gender, contact, username, password],
    function (err) {
      if (err) {
        console.error("Registration error:", err.message); // ✅ Debug
        return res.status(500).send("Database error: " + err.message);
      }
      res.status(200).send("User added");
    }
  );
});


app.get('/users', (req, res) => {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});
app.get('/debug-users', (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    console.log("Current users in DB:", rows);
    res.json(rows);
  });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get(`SELECT * FROM users WHERE username = ? AND password = ?`,
    [username, password],
    (err, row) => {
      if (err) return res.status(500).send(err.message);
      if (row) res.status(200).send("Login success");
      else res.status(401).send("Invalid credentials");
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));