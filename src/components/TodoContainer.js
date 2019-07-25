import React, { Component } from 'react'
import styled from 'styled-components'

import AddTodo from './AddTodo'
import ListTodo from './ListTodo'
import HideTodo from './HideTodo'

class TodoContainer extends Component {

  state = {
    todoList: {},
    hideCompleted: false,
    addError: '',
  }

  addTodo = name => {
    const { todoList } = this.state

    if (todoList[name]) {
      this.setState({ addError: 'this chore is already added' })
    } else {
      this.setState({ addError: '' })
      this.setState({
        todoList: {
          ...todoList,
          [name]: {
            isCompleted: false,
          }
        }
      })
    }
  }

  removeTodo = name => {
    const { todoList } = this.state

    let newList = todoList
    delete newList[name]

    this.setState({ todoList: newList })
  }

  toggleCompleted = () => {
    const { toggleCompleted } = this.state

    this.setState({ toggleCompleted: !toggleCompleted })
  }

  render() {
    const { todoList, addError, hideCompleted } = this.state

    console.log(todoList)

    return (
      <StyledTodoContainer>
        <AddTodo
          addTodo={this.addTodo}
          addError={addError}
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
  width: 100vw;
  background-color: var(--white);
  margin-top: 48px;
  padding: 48px;
`
