const express = require('express');
const router = express.Router();
const TodoItem = require('../models.js')

router.get('/all', (req,res) => {
  const todos = TodoItem.find()
  .then(data => {
    console.log('all todos', data);
    res.send(data)
  })
});

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
    });
});

router.post('/toggle', (req, res) => {
  const id = req.body.id;

  TodoItem.findById(id)
    .then(todo => {
      // console.log(todo);
      todo.completed = !todo.completed
      todo.save()
        .then((resp) => {
          console.log('SUCCESSFULLY SAVED', resp);
          res.send(resp)
        })
    })
    .catch(err => {
      res.send(err)
    });
});

router.post('/delete', (req,res) => {
  const id = req.body.id;
  console.log('in delete',id);


  TodoItem.findByIdAndDelete(id)
    .then(resp => {
      console.log('deleted', resp);
      res.send(resp)
    })
    .catch(err => {
      res.send(err)
    });
})

module.exports = router;
