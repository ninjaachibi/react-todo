import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li onClick={() => this.props.toggleTodo()}><button onClick={()=>this.props.xClick()}>x</button>{this.props.task}</li>
      </div>
    )
  }
}

export default Todo;
