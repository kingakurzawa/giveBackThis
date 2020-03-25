import React from "react";
import "./organizationsBox.scss";

class OrganizationsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.list,
      currentPage: 1,
      todosPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    let currentTodos = [];
    if(todos && todos.length) {
      currentTodos =  todos.slice(indexOfFirstTodo, indexOfLastTodo);
    }

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });
  
    // Logic for displaying page numbers
    const pageNumbers = [];
    if(todos && todos.length) {
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>{renderTodos}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}
export default OrganizationsBox;
