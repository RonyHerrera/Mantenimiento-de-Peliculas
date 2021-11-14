const express = require("express");
const router = express.Router();

const homeController = require("../Controller/homeController")

router.get("/Comedia", homeController.GetComedia);

router.get("/Accion", homeController.GetAccion);

router.get("/Terror", homeController.GetTerror);

router.get("/Suspenso", homeController.GetSuspenso);

router.get("/Documentales", homeController.GetDocumentals);

module.exports = router;   