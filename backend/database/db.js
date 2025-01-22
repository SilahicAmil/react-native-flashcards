// Implement mysql connection to the local DB
// What we need to do. Maybe use express?
// createCOnnection to mysql
// connect to db
// create /deck endpoint
// which we take what we send from the frontend and insert it
// also create a /get/questions for getting decks and questions and etc
//
require("dotenv").config({ path: "backend/.env" });

const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the server", err.stack);
  } else {
    console.log("Conected to DB.");
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT,
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});

// IMplement
