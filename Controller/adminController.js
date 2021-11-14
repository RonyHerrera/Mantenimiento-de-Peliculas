const Movie = require("../Models/Movies")

exports.GetAddMovie = (req, res, next) => {
    res.render("admin/Add-movie", {
        title: "Añadir Pelicula",
        AddMovieActive: true,
        editMode: false,
    });
};

exports.GetMovies = (req, res, next) => {
    Movie.GetAll(function (mov) {
        res.render("admin/Movies", {
            pageTitle: "Admin Movies",
            AdminMovieActive: true,
            mov: mov,
        });
    });
};

exports.PostAddMovie = function (req, res, next) {

    const titulo = req.body.titulo;
    const description = req.body.description;
    const genero = req.body.genero != "Selecciona el Genero" ? req.body.genero : "";
    const estado = true;

    const movie = new Movie(null, titulo, description, genero, estado);
    movie.Save();

    res.redirect("/");
};

exports.GetEditMovie = (req, res, next) => {
    const movieId = req.params.movieId;
    const edit = req.query.edit
    if (!edit) {
        return res.redirect("/");
    }

    Movie.GetById(movieId, (movie) => {
        res.render("admin/Add-movie", {
            title: "Editar Pelicula",
            editMode: edit,
            movie: movie,
        })
    })


};

exports.PostEditMovie = function (req, res, next) {
    const id = req.body.movieId;
    const titulo = req.body.titulo;
    const description = req.body.description;
    const genero = req.body.genero;
    const estado = req.body.estado;

    const movies = new Movie(id, titulo, description, genero, estado);
    movies.Save();

    res.redirect("/admin/Movies");
};

exports.DeleteMovie = function (req, res, next) {
    const id = req.body.movieId;

    Movie.Delete(id);
    res.redirect("/admin/Movies");
};


