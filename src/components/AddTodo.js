import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import addIcon from '../images/add.svg'
import { addTodoAction } from '../actions'
import { doesExist } from '../helpers'

const AddTodo = ({ addTodo }) => {

  const [newTodo, setNewTodo] = useState('')
  const [error, setError] = useState('')

  const onSubmit = event => {
    event.preventDefault()

    if (!newTodo) {
      setError('please enter a chore')
    } else if (doesExist(newTodo)) {
      setError('this chore is already added')
    } else {
      setError('')
      setNewTodo('')
      addTodo(newTodo)
    }
  }

  return (
    <StyledAddTodo>
      <p>Todo's</p>
      {error && <p className='error'>{error}</p>}
      <form
        className='wrapper'
        onSubmit={event => onSubmit(event)}
      >
        <input
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
          placeholder="Add some todo's here..."
        />
        <button type='submit' className='actionBtn'>
          <p>Add</p>
          <img src={addIcon} alt='' />
        </button>
      </form>
    </StyledAddTodo>
  )
}

const mapStateToProps = ({ addError }) => ({ addError })
const mapDispatchToProps = dispatch => ({
  addTodo: name => dispatch(addTodoAction(name))
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

      margin-left: 16px;
      height: 48px;
      width: 120px;

      p {
        color: var(--white);
        font-size: 16px;
      }

      img {
        height: 12px;
        width: 12px;
        margin-left: 12px;
      }

      &:hover {
        opacity: .8;
        cursor: pointer;
      }
    }
  }
`
