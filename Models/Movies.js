const fs = require("fs");
const path = require("path");

const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "movies.json"
);

const GetAllMoviesFromFile = function (callBack) {
  fs.readFile(dataPath, function (error, data) {
    if (error) {
      callBack([]);
    } else {
      callBack(JSON.parse(data));
    }
  });
};

module.exports = class Movie {
  constructor(id, titulo, description, genero, estado) {
    this.id = id;
    this.titulo = titulo;
    this.description = description;
    this.genero = genero;
    this.estado = estado;
  }

  Save() {
    GetAllMoviesFromFile((movies) => {
      if (this.id) {
        const editMovIndex = movies.findIndex(
          (Mov) => Mov.id === this.id
        );

        movies[editMovIndex] = this;
        fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
          console.log(error);
        });
      } else {
        this.id = Math.random().toString();
        movies.push(this);
        fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
          console.log(error);
        });
      }
    });
  }

  static GetAll(cb) {
    GetAllMoviesFromFile(cb);
  }

  static GetById(id, cb) {
    GetAllMoviesFromFile((movies) => {
      const movie = movies.find((p) => p.id === id);
      cb(movie);
    });
  }

  static Delete(id) {
    GetAllMoviesFromFile((movies) => {
      const newMovieList = movies.filter((mov) => mov.id !== id);

      fs.writeFile(dataPath, JSON.stringify(newMovieList), function (error) {
        console.log(error);
      });
    });
  }

  static FilterByCatT(genero) {
    GetAllMoviesFromFile((movies) => {
      const itemGen = movies.filter((item) => item.genero === "Terror");
      genero(itemGen);
    });
  }
  static FilterByCatS(genero) {
    GetAllMoviesFromFile((movies) => {
      const itemGen = movies.filter((item) => item.genero === "Suspenso");
      genero(itemGen);
    });
  }
  static FilterByCatA(genero) {
    GetAllMoviesFromFile((movies) => {
      const itemGen = movies.filter((item) => item.genero === "Accion");
      genero(itemGen);
    });
  }
  static FilterByCatD(genero) {
    GetAllMoviesFromFile((movies) => {
      const itemGen = movies.filter((item) => item.genero === "Documentales");
      genero(itemGen);
    });
  }
  static FilterByCatC(genero) {
    GetAllMoviesFromFile((movies) => {
      const itemGen = movies.filter((item) => item.genero === "Comedia");
      genero(itemGen);
    });
  }
};