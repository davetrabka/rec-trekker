const router = require('express').Router();
const { Plan, Comment } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const plans = await Plan.findAll({ include: [{ all: true }] });
    res.json(plans);
  } catch (error) {
    console.error(error);
  }
});

router.get('/:planUUID', async (req, res, next) => {
  try {
    const plan = await Plan.findOne({
      where: { UUID: req.params.planUUID },
      include: [{ all: true }],
    });
    res.json(plan);
  } catch (error) {
    console.error(error);
  }
});

router.post('/:planUUID/new-comment', async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newPlan = await Plan.create(req.body);
    res.json(newPlan);
  } catch (error) {
    console.error(error);
  }
});
