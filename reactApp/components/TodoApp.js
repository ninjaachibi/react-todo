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
  }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  addTodo(value) {
    dummyData.push({
      taskText: value,
      completed: false
    });
    this.setState({
      todos: dummyData,
    })
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <InputLine submit={(value) => this.addTodo(value)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
