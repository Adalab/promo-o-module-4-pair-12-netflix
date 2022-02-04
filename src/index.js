const express = require("express");
const cors = require("cors");
const dataMovies = require("./data/movies.json");
const path = require("path");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
server.get("/movies", (req, res) => {
  const data = {
    success: true,
    movies: dataMovies,
  };
  res.json(data);
});
server.get('/movie/:movieId', (req, res) => { 
  const foundMovie = dataMovies
  .find(dataMovie => dataMovie.id === req.params.movieId) 
  console.log(req.params.movieId);
  console.log(foundMovie);
  res.render('movie', foundMovie);
});
// config express static server
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));
