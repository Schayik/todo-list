import React, { Component } from 'react'
import styled from 'styled-components'

import AddTodo from './AddTodo'
import ListTodo from './ListTodo'
import HideTodo from './HideTodo'

class TodoContainer extends Component {

  state = {
    todoList: [],
    hideCompleted: false,
  }

  addTodo = name => {
    const { todoList } = this.state
    const newTodo = {
      name,
      isCompleted: false,
    }

    this.setState({ todoList: todoList.concat(newTodo) })
  }

  removeTodo = name => {
    const { todoList } = this.state

    this.setState({
      todoList: todoList.filter(todo => todo.name !== name)
    })
  }

  toggleCompleted = () => {
    const { toggleCompleted } = this.state

    this.setState({ toggleCompleted: !toggleCompleted })
  }

  render() {
    const { todoList, hideCompleted } = this.state

    return (
      <StyledTodoContainer>
        <AddTodo
          addTodo={this.addTodo}
        />
        <ListTodo
          todoList={todoList}
          removeTodo={this.removeTodo}
          hideCompleted={hideCompleted}
        />
        <HideTodo
          hideCompleted={hideCompleted}
          toggleCompleted={this.toggleCompleted}
        />
      </StyledTodoContainer>
    )
  }
}

export default TodoContainer

const StyledTodoContainer = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: var(--white);
  margin-top: 48px;
  padding: 48px;
`
