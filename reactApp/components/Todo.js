import React from 'react';

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

export default Todo;
