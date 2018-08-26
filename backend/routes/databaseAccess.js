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

router.get('/all', (req,res) => {
  const todos = TodoItem.find()
  .then(data => {
    console.log('all todos', data);
    res.send(data)
  })
});

module.exports = router;
