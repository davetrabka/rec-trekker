const router = require('express').Router();
const { Article } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newArticle = await Article.create(req.body);
    res.json(newArticle);
  } catch (error) {
    console.error(error);
  }
});
