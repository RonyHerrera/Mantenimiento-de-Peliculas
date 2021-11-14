const express = require("express");
const path = require("path");
const expressHbs = require("express-Handlebars");



const app = express();
const homeRouter = require("./routes/Home");
const AddRouter = require("./routes/Add-movie")
const GeneroRouter = require("./routes/Generos")
const ErrorController = require("./Controller/ErrorController")

app.use(express.urlencoded({extended: true}));

app.engine("hbs", expressHbs({layoutsDir: 'view/Layouts/',defaultLayout: "main-layout",extname:"hbs"}));
app.set("view engine", "hbs");
app.set("views","view");

app.use(homeRouter);
app.use("/admin",AddRouter);
app.use(GeneroRouter);

app.use(express.static(path.join(__dirname,"public")));

app.use("/", ErrorController.GetNotFound);

app.listen(3000);