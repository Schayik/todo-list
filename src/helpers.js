
import { store } from './index'

export const checkIfCompleted = id => {
  const { todoList } = store.getState()
  return todoList[id].isCompleted
}

export const checkNotification = id => {

  const { todoList, notifications } = store.getState()
  const text = todoList[id].text
  const keys = Object.keys(notifications)

  let notificationId = null

  keys.some(key => {
    const not = notifications[key]
    if (not.todoText === text && ['COMPLETED', 'INCOMPLETE'].includes(not.type)) {
      notificationId = key
      return true
    }
    return false
  })

  return notificationId
}

export const getTodoInfo = id => {
  const { todoList } = store.getState()
  const todo = todoList[id]

  return {
    todoText: todo.text,
    todoAdded: todo.timestampAdded,
  }
}

export const doesExist = text => {
  const { todoList } = store.getState()
  const todoArray = Object.values(todoList)

  return todoArray.some(todo => {
    return todo.text === text
  })
}

export const generateId = () => {
  const timestamp = String(new Date().getTime())
  const randomNumber = String(Math.floor(Math.random() * 1000))
  return timestamp + randomNumber
}

export const getText = (name, type) => {
  switch(type) {
    case 'ADDED':
      return `'${name}' was added to your list`
    case 'REMOVED':
      return `'${name}' was deleted`
    case 'COMPLETED':
      return `'${name}' has been done`
    case 'INCOMPLETE':
      return `'${name}' has been set to 'incomplete'`
    default:
     return null
  }
}

export const getTime = timestamp => {
  const date = new Date(timestamp)

  const addZeros = time => {
    if (String(time).length === 1) {
      return `0${time}`
    } else {
      return time
    }
  }

  const dateString = `${addZeros(date.getDay())}-${addZeros(date.getMonth())}-${date.getFullYear()}`
  const timeString = `${addZeros(date.getHours())}:${addZeros(date.getMinutes())}`

  return `${dateString} ${timeString}`
}
