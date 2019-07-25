import React, { Component } from 'react'
import styled from 'styled-components'

import AddTodo from './AddTodo'
import ListTodo from './ListTodo'
import HideTodo from './HideTodo'

class TodoContainer extends Component {

  state = {
    todoList: {
      'Make Todo List': {
        isCompleted: true,
      },
      'Send Todo List': {
        isCompleted: true,
      },
      'Get Feedback on Todo List': {
        isCompleted: false,
      },
    },
    hideCompleted: false,
    addError: '',
  }

  addTodo = name => {
    const { todoList } = this.state

    if (!name) {
      this.setState({ addError: 'please enter a chore' })
    } else if (todoList[name]) {
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

  toggleCompleted = name => {
    const { todoList } = this.state
    const isCompleted = !todoList[name].isCompleted

    this.setState({
      todoList: {
        ...todoList,
        [name]: {
          ...todoList[name],
          isCompleted,
        }
      }
    })
  }

  toggleHide = () => {
    const { hideCompleted } = this.state

    this.setState({ hideCompleted: !hideCompleted })
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
          toggleCompleted={this.toggleCompleted}
          hideCompleted={hideCompleted}
        />
        <HideTodo
          hideCompleted={hideCompleted}
          toggleHide={this.toggleHide}
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
