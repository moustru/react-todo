import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './types';

export const addTodo = title => (
  {
    type: ADD_TODO,
    title
  }
);

export const toggleTodo = id => (
  {
    type: TOGGLE_TODO,
    id
  }
);

export const removeTodo = id => (
  {
    type: REMOVE_TODO,
    id
  }
);
