var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

//express
var app = express();

//static directory & parsers
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

//override with the POST using [?_method=DELETE]
app.use(methodOverride("_method"));

//handlebars 
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//to import the routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(PORT, function() {
    console.log("Listening PORT " + PORT);
  });