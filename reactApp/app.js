import React from 'react';
import ReactDOM from 'react-dom';

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

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        {this.props.todos.map((item) => {
          return item.completed ? <strike><Todo task={item.taskText}/></strike> : <Todo task={item.taskText}/>
        })}
      </ul>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li><button>x</button>{this.props.task}</li>
      </div>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="task"/> <button>Add Todo</button>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
