import React from 'react'
import styled from 'styled-components'

const ListTodo = ({ todoList, removeTodo, hideCompleted }) => {
  const todoKeys = Object.keys(todoList)

  return (
    <StyledListTodo>
      <h2>Todo list<h2>
      <ul>
        {todoKeys.map(todoKey => (
          <li key={todoKey}>
            <p>{todoKey}</p>
            <div className='buttons'>
              <button
                onClick={() => removeTodo(todoKey)}
              >
                x
              </button>
              <button
                onClick={() => toggleCompleted(todoKey)}
                isCompleted={todoList[todoKey].isCompleted}
              >
                y
              </button>
            </div>
          </li>
        ))}
      </ul>
    </StyledListTodo>
  )
}

export default ListTodo

const StyledListTodo = styled.div`
  ul li {
    margin-top: 20px;
  }
`
