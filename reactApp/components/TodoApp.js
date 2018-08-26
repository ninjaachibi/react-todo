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
    console.log(id);
    console.log('clicked to toggle');
    axios.post(dbUrl + '/toggle', {id})
      .then(response => {
        console.log('toggle response', response);
        let copy = this.state.todos.slice();
        copy[id].completed = !copy[id].completed;
        this.setState({
          todos: copy
        });
      })
      .catch((err) => {
        console.log('error', err);
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
