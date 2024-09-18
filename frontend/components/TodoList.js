import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    const { todos, toggleCompleted } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => (
          <Todo
          key={index}
          todo={todo}
          index={index}
          toggleCompleted={toggleCompleted}
          />
        ))}
        </ul>
    );
  }
}
export default TodoList;
          