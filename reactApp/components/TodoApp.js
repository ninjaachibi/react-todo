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

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
