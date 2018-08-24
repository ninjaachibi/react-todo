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
          <strike key={index}><Todo task={item.taskText} xClick={() => this.props.todoXClick(index)} toggleTodo={() => this.props.toggleTodo(index)} /></strike> :
          <Todo task={item.taskText} xClick={() => this.props.todoXClick(index)} toggleTodo={() => this.props.toggleTodo(index)} key={index}/>
        })}
      </ul>
    )
  }
}

export default TodoList;
