
import { store } from './'

export const ADD_TODO_SUCCES = 'ADD_TODO_SUCCES'
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const addTodoAction = name => dispatch => {

  if (!name) {
    dispatch({
      type: ADD_TODO_FAIL,
      addError: 'please enter a chore',
    })
  } else if (doesExist(name)) {
    dispatch({
      type: ADD_TODO_FAIL,
      addError: 'this chore is already added',
    })
  } else {
    dispatch({
      type: ADD_TODO_SUCCES,
      name,
    })
  }
}

export const removeTodoAction = name => dispatch => {
  dispatch({
    type: REMOVE_TODO,
    name,
  })
}

export const toggleCompletedAction = name => dispatch => {
  dispatch({
    type: TOGGLE_COMPLETED,
    name,
  })
}

const doesExist = name => {
  const { todoList } = store.getState()

  if (Object.keys(todoList).includes(name)) {
    return true
  } else {
    return false
  }
}
