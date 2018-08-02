const router = require('express').Router();
const { Article, Comment } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.findAll({ include: [{ all: true }] });
    res.json(articles);
  } catch (error) {
    console.error(error);
  }
});

router.get('/:slug', async (req, res, next) => {
  try {
    const article = await Article.findOne({
      where: { slug: req.params.slug },
      include: [{ all: true }],
    });
    res.json(article);
  } catch (error) {
    console.error(error);
  }
});

router.post('/:slug/new-comment', async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (error) {
    console.error(error);
  }
});

// router.post('/', async (req, res, next) => {
//   try {
//     const newArticle = await Article.create(req.body);
//     res.json(newArticle);
//   } catch (error) {
//     console.error(error);
//   }
// });
