import React, { Component} from 'react'
import TodoList from './TodoList'
import Form from './Form'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [],
        filterCompleted: false,
      };
    }

    addTodo = (todoText) => {
      this.setState(prevState => ({
        todos: [...prevState.todos, { text: todoText, completed: false}]
      }));
    }

    toggleCompleted = (index) => {
      this.setState(prevState => {
        const todos = prevState.todos.map((todo, i) => {
          if (i === index) {
            return { ...todo, completed: !todo.completed };
          }
        return todo;
      });
      return { todos };
    });
  }

    clearCompleted = () => {
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => !todo.completed)
      }));
    }

    toggleFilter = () => {
      this.setState(prevState => ({
        filterCompleted: !prevState.filterCompleted
      }));
    }

    render() {
      const { todos, filterCompleted } = this.state;
      const displayedTodos = filterCompleted ? todos.filter(todo => !todo.completed) : todos;

      return (
        <div>
          <h1>Todo List</h1>
          <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
          <TodoList todos={displayedTodos} toggleCompleted={this.toggleCompleted} />
          <button onClick={this.toggleFilter}>
            {filterCompleted ? 'Show All' : 'Show Incomplete'}
          </button>
        </div>
      );
    }
  }
  export default App;

  

    