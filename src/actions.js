
import { store } from './index'
import { generateId } from './helpers'

export const ADD_TODO_SUCCES = 'ADD_TODO_SUCCES'
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const addTodoAction = text => dispatch => {

  if (!text) {
    dispatch({
      type: ADD_TODO_FAIL,
      addError: 'please enter a chore',
    })
  } else if (doesExist(text)) {
    dispatch({
      type: ADD_TODO_FAIL,
      addError: 'this chore is already added',
    })
  } else {
    const id = generateId()
    dispatch({
      type: ADD_TODO_SUCCES,
      id,
      text,
    })
    console.log(getTodoInfo(id))
    dispatch({
      type: ADD_NOTIFICATION,
      notificationType: 'ADDED',
      id,
      ...getTodoInfo(id),
    })
  }
}

export const removeTodoAction = id => dispatch => {
  dispatch({
    type: ADD_NOTIFICATION,
    notificationType: 'REMOVED',
    id: generateId(),
    ...getTodoInfo(id),
  })
  dispatch({
    type: REMOVE_TODO,
    id,
  })
}

export const toggleCompletedAction = id => dispatch => {
  dispatch({
    type: TOGGLE_COMPLETED,
    id,
  })
  dispatch({
    type: ADD_NOTIFICATION,
    notificationType: 'COMPLETED',
    id: generateId(),
    ...getTodoInfo(id),
  })
}

export const removeNotificationAction = id => dispatch => {
  dispatch({
    type: REMOVE_NOTIFICATION,
    id,
  })
}

const getTodoInfo = id => {
  const { todoList } = store.getState()
  const todo = todoList[id]

  return {
    todoText: todo.text,
    todoAdded: todo.timestampAdded,
  }
}

const doesExist = text => {
  const { todoList } = store.getState()
  const todoArray = Object.values(todoList)

  const exists = todoArray.some(todo => {
    return todo.text === text
  })

  return exists
}
