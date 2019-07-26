import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

const ListTodo = ({ todoList, isHidden }) => {
  const todoKeys = Object.keys(todoList)

  return (
    <StyledListTodo>
      <h2>Todo list</h2>
      {todoKeys.length === 0
        ? <p className='no-todos'>You have no todo's.</p>
        : <ul>
            {todoKeys.map(todoKey => {
              if (isHidden && todoList[todoKey].isCompleted) {
                return null
              } else {
                return <TodoItem key={todoKey} item={todoList[todoKey]} id={todoKey} />
              }
            })}
          </ul>
      }
    </StyledListTodo>
  )
}

const mapStateToProps = ({ todoList }) => ({ todoList })
export default connect(mapStateToProps)(ListTodo)

const StyledListTodo = styled.div`
  margin-top: 80px;

  h2 {
    font-size: 24px;
  }

  p.no-todos {
    margin-top: 12px;
  }

  @media(max-width: ${props => props.theme.breakpoints.phone}px) {
    margin-top: 40px;
  }
`
