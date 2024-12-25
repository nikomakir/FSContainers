const express = require('express');
const router = express.Router();
const redis = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (_, res) => {
  const addedTodos = (await redis.getAsync('added_todos')) || 0;
  res.json({ added_todos: parseInt(addedTodos) });
})

module.exports = router;
