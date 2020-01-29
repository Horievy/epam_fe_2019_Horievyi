const log = require(INCPATH + "/log")(module);
const express =  require('express');
const fs = require("fs");
const router = express.Router();
let list;

fs.readFile("./config/articles.json", "utf8", function(err, data) {
    if (err) {
        return console.log(err);
    }
    list = data;
    list = JSON.parse(list);
});

router.get("/articles", function(req, res) {
    log.info("==Get all list articles==");
    res.end(JSON.stringify(list));
});

router.post("/create-article", function(req, res) {
  log.info("==Save article==");
  const postId = list.length;
  req.body.id = postId;
  list.push(req.body);
  res.end(JSON.stringify(list));
});

router.get("/articles/:id", function(req, res) {
  log.info("==Get article by id==");
  const articleById = list.find(article => +article.id === +req.params.id);
  res.end(JSON.stringify(articleById));
});

router.put("/updateArticle/:id", function (req, res) {
  log.info('==Update an article==');
  const articleById = list.find(article => +article.id === +req.params.id);
  console.log(req.body);
  articleById.postText = req.body.postText;
  res.end(JSON.stringify(list));
});

router.delete("/deleteArticle/:id", function (req, res) {
  log.info('==Delete article by id==');
  const articleById = list.findIndex(article => +article.id === +req.params.id);
  if (articleById !== -1) {
    list.splice(articleById, 1);
  }
  res.end(JSON.stringify(list));
});

router.delete("/deleteAllArticles", function (req, res) {
  log.info('==Delete all articles==');
  list = [];
  res.end(JSON.stringify(list));
});

module.exports = router;
