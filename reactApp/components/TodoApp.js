import React from 'react';
import InputLine from './InputLine'
import TodoList from './TodoList'
import axios from 'axios'

const dbUrl = "http://localhost:3000/db";

let dummyData = [
  {
    taskText: 'robert',
    completed: false
  },
  {
    taskText: 'jerry',
    completed: false
  },
  {
    taskText: 'smash',
    completed: false,
  },
  {
    taskText: 'haircut',
    completed: true
  },
  {
    taskText: 'eat',
    completed: true
  }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }

  addTodo(value) {
    axios.post(dbUrl+ '/add', {task: value})
      .then((response) => {
        console.log(response);
        this.setState({todos: this.state.todos.concat(response.data)})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  removeTodo(index) {
    dummyData.splice(index,1);
    this.setState({
      todos: dummyData
    });
  }

  toggleTodo(index) {
    console.log(index);
    console.log('clicked to toggle');
    let copy = this.state.todos.slice();
    copy[index].completed = !copy[index].completed;
    this.setState({
      todos: copy
    })
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <h1>My Todo List</h1>
        hi
        <InputLine submit={(value) => this.addTodo(value)}/>
        <TodoList todos={this.state.todos} todoXClick={(index)=>this.removeTodo(index)} toggleTodo={(index)=>this.toggleTodo(index)}/>
      </div>
    )
  }
}

export default TodoApp;
