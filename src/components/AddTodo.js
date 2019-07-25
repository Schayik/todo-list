import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { addTodoAction } from '../actions'

const AddTodo = ({ addTodo, addError, addSucces }) => {

  const [value, setValue] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    addTodo(value)
  }

  return (
    <StyledAddTodo>
      <p>Todo's</p>
      {addError && <p className='error'>{addError}</p>}
      {addSucces && <p className='succes'>{addSucces}</p>}
      <form
        className='wrapper'
        onSubmit={event => onSubmit(event)}
      >
        <input
          value={value}
          onChange={event => setValue(event.target.value)}
          placeholder="Add some todo's here..."
        />
        <button type='submit'>
          Add +
        </button>
      </form>
    </StyledAddTodo>
  )
}

const mapStateToProps = ({ addError, addSuccess }) => ({ addError, addSuccess })
const mapDispatchToProps = dispatch => ({
  addTodo: value => dispatch(addTodoAction(value)) 
})
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)

const StyledAddTodo = styled.div`
  p {
    color: var(--grey);
    font-size: 16px;
    &.error {
      margin-top: 4px;
      color: var(--red);
    }
    &.succes {
      margin-top: 4px;
      color: var(--green);
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
      &:hover {
        opacity: .8;
        cursor: pointer;
      }
    }
  }
`
