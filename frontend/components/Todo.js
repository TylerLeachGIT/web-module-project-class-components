import React, { Component } from 'react'

class Todo extends Component {
  handleToggle = () => {
    const { index, toggleCompleted } = this.props;
    toggleCompleted(index);
  }

  render() {
    const { todo } = this.props;
    return (
      <li onClick={this.handleToggle} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
        {todo.text}
      </li>
    );
  }
}
export default Todo;