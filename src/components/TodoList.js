import React from 'react'
import styled from 'styled-components'

import TodoContainer from './TodoContainer'

const TodoList = () => (
  <StyledTodoList className='compress'>
    <h1>Pim's todo list</h1>
    <div className='line' />
    <TodoContainer />
  </StyledTodoList>
)

export default TodoList

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 36px;
    font-weight: 300;
    margin-top: 40px;
  }

  .line {
    background-color: var(--red);
    margin-top: 16px;
    width: 120px;
    height: 4px;
  }

`
