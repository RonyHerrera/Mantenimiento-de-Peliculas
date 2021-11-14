
const express = require("express");
const router = express.Router();

const homeController = require("../Controller/homeController")

router.get("/", homeController.GetIndex);

router.get("/Movie-list", homeController.GetListMovies);

module.exports = router;    