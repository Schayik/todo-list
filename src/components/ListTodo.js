import React from 'react'
import styled from 'styled-components'

const ListTodo = ({ todoList, removeTodo, toggleCompleted, hideCompleted }) => {
  const todoKeys = Object.keys(todoList)

  return (
    <StyledListTodo>
      <h2>Todo list</h2>
      <ul>
        {todoKeys.map(todoKey => {
          if (hideCompleted && todoList[todoKey].isCompleted) {
            return null
          }

          return (
            <li key={todoKey}>
              <p>{todoKey}</p>
              <div className='buttons'>
                <button
                  className='remove'
                  onClick={() => removeTodo(todoKey)}
                >
                  x
                </button>
                <button
                  className={todoList[todoKey].isCompleted ? 'complete completed' : 'complete'}
                  onClick={() => toggleCompleted(todoKey)}
                >
                  y
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </StyledListTodo>
  )
}

export default ListTodo

const StyledListTodo = styled.div`
  margin-top: 80px;
  
  ul li {
    border-bottom: 1px var(--light) solid;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 20px;
    padding-bottom: 8px;
  }

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
      margin-left: 24px;
      &.completed {
        opacity: .5;
      }
    }
  }
`
