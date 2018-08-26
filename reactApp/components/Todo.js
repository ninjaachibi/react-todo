import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <li onClick={() => this.props.toggleTodo()}>{this.props.task}</li>
          <button onClick={()=>this.props.xClick()}>x</button>
      </div>
    )
  }
}

export default Todo;
