const express = require("express");
const cors = require("cors");
const path = require("path");
const Database = require("better-sqlite3");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set("view engine", "ejs");

//config database
const db = Database("./src/db/database.db", { verbose: console.log });

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get("/movies", (req, res) => {
  const query = db.prepare("SELECT * FROM movies ORDER BY title");
  const movies = query.all();
  const data = {
    success: true,
    movies: movies,
  };
  res.json(data);
});

server.post("/#/signup", (req, res) => {
  const query = db.prepare("INSERT INTO users (email, password) VALUES (?, ?)");
  const result = query.run(req.params.email, req.params.password);
  const data = {
    success: true,
    userId: "nuevo-id-añadido",
  };
  res.json(data);
});

server.get("/movies/:gender", (req, res) => {
  const query = db.prepare("SELECT * FROM movies WHERE gender= ? ");
  const movies = query.all(req.params.gender);
  const data = {
    success: true,
    movies: movies,
  };
  res.json(data);
});

server.get("/movie/:movieId", (req, res) => {
  const foundMovie = movies.find((movie) => movie.id === req.params.movieId);
  console.log(req.params.movieId);
  console.log(foundMovie);
  res.render("movie", foundMovie);
});
// config express static server
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));
