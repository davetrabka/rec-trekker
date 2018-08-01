const router = require('express').Router();
const { User } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({ attributes: ['id', 'email'] });
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    console.error(error);
  }
});
