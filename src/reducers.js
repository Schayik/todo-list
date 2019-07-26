
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from './actions'

const initialState = {
  todoList: {
    15641780591401234: {
      text: 'Make Todo List',
      isCompleted: true,
      timestampAdded: 1564178059140,
    },
    15641780591404321: {
      text: 'A very long todo item to show that it will not break the app or make things look weird',
      isCompleted: false,
      timestampAdded: 1564178059140,
    },
  },
  notifications: {
    15641780591402341: {
      type: 'ADDED',
      todoText: 'A very long todo item to show that it will not break the app or make things look weird',
      todoAdded: 1564178059140,
    },
  },
}

export const todos = (state=initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: {
          ...state.todoList,
          [action.id]: {
            text: action.text,
            isCompleted: false,
            timestampAdded: new Date().getTime(),
          }
        }
      }
    case REMOVE_TODO:
      let newTodoList = Object.assign({}, state.todoList)
      delete newTodoList[action.id]
      return {
        ...state,
        todoList: newTodoList,
      }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todoList: {
          ...state.todoList,
          [action.id]: {
            ...state.todoList[action.id],
            isCompleted: !state.todoList[action.id].isCompleted,
          }
        },
      }
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.id]: {
            type: action.notificationType,
            todoText: action.todoText,
            todoAdded: action.todoAdded,
          }
        }
      }
    case REMOVE_NOTIFICATION:
      let newNotifications = Object.assign({}, state.notifications)
      delete newNotifications[action.id]
      return {
        ...state,
        notifications: newNotifications,
      }
    default:
      return state
  }
}
