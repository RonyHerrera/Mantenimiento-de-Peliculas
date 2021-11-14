
const express = require("express");
const router = express.Router();

const adminController = require("../Controller/adminController")

router.get("/Movies", adminController.GetMovies);

router.get("/edit-Movies/:movieId", adminController.GetEditMovie);

router.post("/edit-Movies", adminController.PostEditMovie);

router.post("/delete-movie", adminController.DeleteMovie);

router.get("/Add-movie", adminController.GetAddMovie);

router.post("/Add-movie", adminController.PostAddMovie);

module.exports = router;        