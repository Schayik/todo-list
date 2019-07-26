
import {
  ADD_TODO_SUCCES,
  ADD_TODO_FAIL,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from './actions'

const initialState = {
  todoList: {
    3670184576441032: {
      text: 'Find car keys, leave house, go to the car, open car, get in the car, drive car to grocery store, get groceries, pay groceries, get back in car, drive back, do not cause accidents, get home, unpack groceries, sleep.',
      isCompleted: true,
      timestampAdded: new Date().getTime(),
    },
    3670184576441036: {
      text: 'Make Todo List',
      isCompleted: true,
      timestampAdded: new Date().getTime(),
    },
    3670184576441034: {
      text: 'Send Todo List',
      isCompleted: true,
      timestampAdded: new Date().getTime(),
    },
    3670184576441035: {
      text: 'Get Feedback on Todo List',
      isCompleted: false,
      timestampAdded: new Date().getTime(),
    },
  },
  notifications: {
    // 3670184576441036: {
    //   type: 'REMOVED',
    //   todoText: 'Get Feedback on Todo List',
    //   todoAdded: 1564113959,
    // },
    // 3670184576441032: {
    //   type: 'ADDED',
    //   todoText: 'Get Feedback on Todo List',
    //   todoAdded: 1564113959,
    // },
    // 3670184576441031: {
    //   type: 'COMPLETED',
    //   todoText: 'Get Feedback on Todo List',
    //   todoAdded: 1564113959,
    // },
  },
  addError: '',
}

export const todos = (state=initialState, action) => {
  switch(action.type) {
    case ADD_TODO_SUCCES:
      return {
        ...state,
        addError: '',
        todoList: {
          ...state.todoList,
          [action.id]: {
            text: action.text,
            isCompleted: false,
            timestampAdded: new Date().getTime(),
          }
        }
      }
    case ADD_TODO_FAIL:
      return {
        ...state,
        addError: action.addError,
      }
    case REMOVE_TODO:
      let newTodoList = Object.assign({}, state.todoList)
      delete newTodoList[action.id]
      return {
        ...state,
        todoList: newTodoList,
        addError: '',
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
        addError: '',
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
        addError: '',
      }
    default:
      return state
  }
}
