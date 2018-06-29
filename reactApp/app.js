import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = ['robert', 'jerry', 'smash', 'haircut', 'laundry'];

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
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
        {dummyData.map((item) => <Todo task={item}/>)}
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
