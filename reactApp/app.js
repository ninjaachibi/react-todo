import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = ['robert', 'jerry', 'smash', 'haircut', 'laundry'];

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

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
