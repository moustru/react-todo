import { combineReducers } from 'redux';
import initialState from './state';
import { ADD_TODO, REMOVE_TODO } from './types';
import { generateId } from '@/utils';

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos, {
            id: generateId(8),
            title: action.title,
            date: new Date()
          }
        ]
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    default:
      return state;
  }
};

export default combineReducers({ todos });
