const MovieModel = require("../Models/Movies")

exports.GetIndex = (req,res,next) =>{

    MovieModel.GetAll((movies)=>{
     res.render("HomeMovies/Home",{
         title: "Peliculas",
         mov: movies,
         homeActive: true,
        hasMovies: movies.lenght > 0,
        }) 
    })

    
};
exports.GetListMovies = (req,res,next) => {
    MovieModel.GetAll((movies)=>{
        res.render("HomeMovies/Movie-list",{
            title: "Lista de peliculas", listActive: true, mov: movies
           }) 
       })
};

exports.GetTerror = (req,res,next) => {
    MovieModel.FilterByCatT(( genero)=>{
    res.render("HomeMovies/Terror-m",{
        title: "Terror", terrorActive: true, genero: genero})
    })
};

exports.GetAccion = (req,res,next) => {
    MovieModel.FilterByCatA(( genero)=>{
            res.render("HomeMovies/accion-m",{
                title: "Accion", accionActive: true, genero: genero})
        })
    
};

exports.GetSuspenso = (req,res,next) => {
    MovieModel.FilterByCatS(( genero)=>{
        res.render("HomeMovies/Susp-m",{
            title: "Suspenso", suspensoActive: true,genero: genero})
    })
};

exports.GetComedia = (req,res,next) => {
    MovieModel.FilterByCatC(( genero)=>{
        res.render("HomeMovies/Comedia-m",{
            title: "Comedia", comediaActive: true,genero: genero})
    })
};

exports.GetDocumentals = (req,res,next) => {
    MovieModel.FilterByCatD(( genero)=>{
        res.render("HomeMovies/Documental-m",{
            title: "Documentales", docuActive: true,genero: genero})
    })
};
