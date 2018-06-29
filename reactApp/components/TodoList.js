import React from 'react'
import Todo from './Todo'

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

export default TodoList;
