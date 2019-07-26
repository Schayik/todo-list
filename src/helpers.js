import { store } from './index'

export const doesExist = name => {
  const { todoList } = store.getState()

  if (Object.keys(todoList).includes(name)) {
    return true
  } else {
    return false
  }
}

export const getText = (name, type) => {
  switch(type) {
    case 'ADDED':
      return `'${name}' was added to your list`
    case 'REMOVED':
      return `'${name}' was deleted`
    case 'COMPLETED':
      return `'${name}' has been done`
    default:
     return null
  }
}
