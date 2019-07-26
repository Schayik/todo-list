import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { removeTodoAction, toggleCompletedAction } from '../actions'

const TodoItem = ({ name, item, removeTodo, toggleCompleted }) => (
  <StyledTodoItem>
    <p>{name}</p>
    <div className='buttons'>
      <button
        className='remove actionBtn'
        onClick={() => removeTodo(name)}
      >
        x
      </button>
      <button
        className={item.isCompleted ? 'complete completed actionBtn' : 'complete actionBtn'}
        onClick={() => toggleCompleted(name)}
      >
        y
      </button>
    </div>
  </StyledTodoItem>
)

const mapDispatchToProps = dispatch => ({
  removeTodo: name => dispatch(removeTodoAction(name)),
  toggleCompleted: name => dispatch(toggleCompletedAction(name)),
})
export default connect(null, mapDispatchToProps)(TodoItem)

const StyledTodoItem = styled.li`
  border-bottom: 1px var(--light) solid;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  padding-bottom: 8px;

  p {
    color: var(--red);
    font-size: 16px;
  }

  button {
    &.remove {
      background-color: var(--red);
    }
    &.complete {
      background-color: var(--green);
      opacity: .5;
      margin-left: 24px;
      &.completed {
        opacity: 1;
      }
    }
  }

`
