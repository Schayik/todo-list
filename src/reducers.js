
import {
  ADD_TODO_SUCCES,
  ADD_TODO_FAIL,
  REMOVE_TODO,
} from './actions'

const initialState = {
  todoList: {
    'Make Todo List': {
      isCompleted: true,
    },
    'Send Todo List': {
      isCompleted: true,
    },
    'Get Feedback on Todo List': {
      isCompleted: false,
    },
  },
  addError: '',
  addSucces: '',
}

export const todos = (state=initialState, action) => {
  switch(action.type) {
    case ADD_TODO_SUCCES:
      return {
        ...state,
        addError: '',
        addSucces: 'Chore successfully added',
        todoList: {
          ...state.todoList,
          [action.name]: {
            isCompleted: false,
          }
        }
      }
    case ADD_TODO_FAIL:
      return {
        ...state,
        addError: action.addError,
        addSucces: '',
      }
    case REMOVE_TODO:
      return {

      }
    default:
      return state
  }
}
