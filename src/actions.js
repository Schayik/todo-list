
import {
  generateId,
  getTodoInfo,
  checkNotification,
  checkIfCompleted
} from './helpers'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const addTodoAction = text => dispatch => {

  const id = generateId()

  dispatch({
    type: ADD_TODO,
    id,
    text,
  })

  dispatch({
    type: ADD_NOTIFICATION,
    notificationType: 'ADDED',
    id,
    ...getTodoInfo(id),
  })
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

  const notificationId = checkNotification(id)

  if (notificationId) {
    dispatch({
      type: REMOVE_NOTIFICATION,
      id: notificationId,
    })
  }

  const completed = checkIfCompleted(id)

  dispatch({
    type: ADD_NOTIFICATION,
    notificationType: completed ? 'COMPLETED' : 'INCOMPLETE',
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
