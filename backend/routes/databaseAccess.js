const express = require('express');
const router = express.Router();
const TodoItem = require('../models.js')

router.post('/add', (req,res) => {
  const testTodo = new TodoItem({
    taskText: req.body.task,
  });

  testTodo.save()
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      res.send(err)
    })
});


module.exports = router;
