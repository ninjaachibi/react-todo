import React from 'react';
import InputLine from './InputLine'
import TodoList from './TodoList'
import axios from 'axios'

const dbUrl = "http://localhost:3000/db";

// let dummyData = [
//   {
//     taskText: 'robert',
//     completed: false
//   },
//   {
//     taskText: 'jerry',
//     completed: false
//   },
//   {
//     taskText: 'smash',
//     completed: false,
//   },
//   {
//     taskText: 'haircut',
//     completed: true
//   },
//   {
//     taskText: 'eat',
//     completed: true
//   }
// ];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  componentDidMount() {
    axios.get(dbUrl + '/all')
      .then((response) => {
        console.log('initial data', response);
        this.setState({
          todos: response.data
        });
      })

  }

  addTodo(value) {
    axios.post(dbUrl + '/add', {task: value})
      .then((response) => {
        console.log(response);
        this.setState({todos: this.state.todos.concat(response.data)})
      })
      .catch((err) => {
        console.log('error', err);
      })
  }

  removeTodo(id) {
    axios.post(dbUrl + '/delete', {id})
      .then((response) => {
        console.log('remove response', response);
        let copy = this.state.todos.slice();
        let filtered = copy.filter(todo => todo._id !== id);
        console.log('filtered', filtered);
        this.setState({
          todos: filtered
        });
      })
      .catch(err => {console.log('error',err)})
  }

  toggleTodo(id) {
    console.log('id to toggel',id);
    console.log('clicked to toggle');

    axios.post(dbUrl + '/toggle', {id})
      .then(response => {
        console.log('toggle response', response);
      })
      .catch((err) => {
        console.log('error', err);
      })

    let copy = this.state.todos.slice();
    console.log('copy', copy);
    copy.forEach((item) => {
      if(item._id === id) {
        item.completed = !item.completed;
      }
    })
    console.log('copy after', copy);
    this.setState({
      todos: copy
    });
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <h1>My Todo List</h1>
        hi
        <InputLine submit={this.addTodo}/>
        <TodoList todos={this.state.todos} todoXClick={this.removeTodo} toggleTodo={this.toggleTodo}/>
      </div>
    )
  }
}

export default TodoApp;
