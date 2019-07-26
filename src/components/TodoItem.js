import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import CloseIcon from '../images/CloseIcon'
import doneIcon from '../images/done.svg'
import { removeTodoAction, toggleCompletedAction } from '../actions'

const TodoItem = ({ id, item, removeTodo, toggleCompleted }) => (
  <StyledTodoItem>
    <p>{item.text}</p>
    <div className='buttons'>
      <button
        className='remove actionBtn'
        onClick={() => removeTodo(id)}
      >
        <CloseIcon />
      </button>
      <button
        className={item.isCompleted ? 'complete completed actionBtn' : 'complete actionBtn'}
        onClick={() => toggleCompleted(id)}
      >
        <img src={doneIcon} alt='' />
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

  .buttons {
    margin-left: 16px;
    flex-shrink: 0;
    display: flex;

    button {
      svg {
        fill: var(--white);
        width: 14px;
      }
      img {
        width: 16px;
      }

      &.remove {
        background-color: var(--red);
      }
      &.complete {
        background-color: var(--green);
        opacity: .5;
        margin-left: 24px;
        @media(max-width: ${props => props.theme.breakpoints.phone}px) {
          margin-left: 8px;
        }
        &:hover {
          opacity: .7;
        }
        &.completed {
          opacity: 1;
          &:hover {
            opacity: .8;
          }
        }
      }
    }
  }

  @media(max-width: ${props => props.theme.breakpoints.phone}px) {
    margin-top: 12px;
    p {
      font-size: 14px;
    }
  }

  @media(max-width: ${props => props.theme.breakpoints.xs}px) {
    p {
      font-size: 12px;
    }
  }



`
