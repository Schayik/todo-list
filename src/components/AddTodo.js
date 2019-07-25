import React, { useState } from 'react'
import styled from 'styled-components'

const AddTodo = ({ addTodo, addError }) => {

  const [value, setValue] = useState('')

  return (
    <StyledAddTodo>
      <p>Todo's</p>
      {addError && <p className='error'>{addError}</p>}
      <div className='wrapper'>
        <input
          value={value}
          onChange={event => setValue(event.target.value)}
          placeholder="Add some todo's here..."
        />
        <button onClick={() => addTodo(value)}>
          Add +
        </button>
      </div>
    </StyledAddTodo>
  )
}

export default AddTodo

const StyledAddTodo = styled.div`
  p {
    color: var(--grey);
    font-size: 16px;
    &.error {
      margin-top: 4px;
      color: var(--red);
    }
  }

  .wrapper {
    margin-top: 4px;
    display: flex;
    input {
      flex: 1;
      border: 2px var(--light-blue) solid;
      border-radius: 6px;

      font-size: 18px;

      padding: 0 12px;
      height: 48px;
      &::placeholder {
        color: var(--grey);
      }
      &:focus {
        outline: none;
        border-color: var(--blue);
      }
    }
    button {
      background-color: var(--blue);
      border: none;
      border-radius: 24px;

      color: var(--white);
      font-size: 16px;

      margin-left: 16px;
      height: 48px;
      width: 120px;
    }
  }
`
