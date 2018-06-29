import React from 'react';
import InputLine from './InputLine'
import TodoList from './TodoList'

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
    dummyData.push({
      taskText: value,
      completed: false
    });
    this.setState({
      todos: dummyData,
    });
  }

  removeTodo(index) {
    dummyData.splice(index,1);
    this.setState({
      todos: dummyData
    });
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <InputLine submit={(value) => this.addTodo(value)}/>
        <TodoList todos={this.state.todos} todoXClick={(index)=>this.removeTodo(index)}/>
      </div>
    )
  }
}

export default TodoApp;
