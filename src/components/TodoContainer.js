import React, { useState } from 'react'
import styled from 'styled-components'

import AddTodo from './AddTodo'
import ListTodo from './ListTodo'
import HideTodo from './HideTodo'

const TodoContainer = () => {

  const [isHidden, setHidden] = useState(false)

  return (
    <StyledTodoContainer>
      <AddTodo />
      <ListTodo
        isHidden={isHidden}
      />
      <HideTodo
        isHidden={isHidden}
        setHidden={setHidden}
      />
    </StyledTodoContainer>
  )
}

export default TodoContainer

const StyledTodoContainer = styled.div`
  max-width: 600px;
  width: 100vw;
  background-color: var(--white);
  margin-top: 48px;
  padding: 48px;
`
