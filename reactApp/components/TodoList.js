import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        {this.props.todos.map((item, index) => {
          return item.completed ?
          <strike key={item._id}><Todo task={item.taskText} xClick={() => this.props.todoXClick(item._id)} toggleTodo={() => this.props.toggleTodo(item._id)} /></strike> :
          <Todo task={item.taskText} xClick={() => this.props.todoXClick(item._id)} toggleTodo={() => this.props.toggleTodo(item._id)} key={item._id}/>
        })}
      </ul>
    )
  }
}

export default TodoList;
