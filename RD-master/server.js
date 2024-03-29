//initialize global variable with our path
global.ABSPATH = __dirname;
global.INCPATH = ABSPATH + "/libs";

const path = require("path"); //helps to establish the right ways
const express = require("express"); //the framework itself - the shell over the node JS
const app = express(); //create our application
const config = require(INCPATH + "/config"); //our common config
const log = require(INCPATH + "/log")(module); //log is a function. which is called with the current model to which
// it is connected
const cors = require("cors"); //https://github.com/expressjs/cors
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./config/swagger.yaml");
const fs = require("fs");
const routes = require('./routes');

// const apiConfig = require(ABSPATH + '/api');
// app.use ->  this is middleware
app.use(cors());
// app.use('/api', apiConfig);
app.use(express.static(__dirname)); //reading static files
app.use(express.json()); //initialize json parser
app.use(express.urlencoded({ extended: true })); //pars url

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes);
//getting static file
app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

// app.get("/api/articles", function(req, res) {
//   log.info("==Get all list articles==");
//   res.end(JSON.stringify(list));
// });

// app.post("/api/create-article", function(req, res) {
//   log.info("==Save article==");
//   list.push(req.body);
//   res.end(JSON.stringify(list));
// });
//
// app.get("/api/articles/:id", function(req, res) {
//   log.info("==Get article by id==");
//   const articleById = list.find(article => +article.id === +req.params.id);
//   res.end(JSON.stringify(articleById));
// });
//
// app.put("/api/updateArticle/:id", function (req, res) {
//   log.info('==Update an article==');
//   const articleById = list.find(article => +article.id === +req.params.id);
//   articleById.postText = req.body.postText;
//   res.end(JSON.stringify(list));
// });
//
// app.delete("/api/deleteArticle/:id", function (req, res) {
//   log.info('==Delete article by id==');
//   const articleById = list.findIndex(article => +article.id === +req.params.id);
//   if (articleById !== -1) {
//     list.splice(articleById, 1);
//   }
//   res.end(JSON.stringify(list));
// });
//
// app.delete("/api/deleteAllArticles", function (req, res) {
//   log.info('==Delete all articles==');
//   list = [];
//   res.end(JSON.stringify(list));
// });

//listen our post, 3000
app.listen(config.get("port"), function() {
  log.info("Server start running on port " + config.get("port"));
});
