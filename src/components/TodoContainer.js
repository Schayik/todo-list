import React, { useState } from 'react'
import styled from 'styled-components'

import AddTodo from './AddTodo'
import ListTodo from './ListTodo'
import HideTodo from './HideTodo'

const TodoContainer = () => {

  const [isHidden, setHidden] = useState(false)

  return (
    <StyledTodoContainer>
      <h1>Pim's todo list</h1>
      <div className='line' />
      <div className='container'>
        <AddTodo />
        <ListTodo
          isHidden={isHidden}
        />
        <HideTodo
          isHidden={isHidden}
          setHidden={setHidden}
        />
      </div>
    </StyledTodoContainer>
  )
}

export default TodoContainer

const StyledTodoContainer = styled.div`

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

  .container {
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0 0 6px 0 var(--grey);

    max-width: 600px;
    width: 100vw;
    margin-top: 48px;
    padding: 48px;
  }
`
