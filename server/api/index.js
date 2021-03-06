const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/articles', require('./articles'));
router.use('/plans', require('./plans'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
