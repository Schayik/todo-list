import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

const ListTodo = ({ todoList, isHidden }) => {
  const todoKeys = Object.keys(todoList)

  return (
    <StyledListTodo>
      <h2>Todo list</h2>
      <ul>
        {todoKeys.map(todoKey => {
          if (isHidden && todoList[todoKey].isCompleted) {
            return null
          } else {
            return <TodoItem key={todoKey} item={todoList[todoKey]} name={todoKey} />
          }
        })}
      </ul>
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
`
