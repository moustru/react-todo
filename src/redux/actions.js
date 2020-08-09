import { ADD_TODO, REMOVE_TODO } from './types';

export const addTodo = title => (
  {
    type: ADD_TODO,
    title
  }
);

export const removeTodo = id => (
  {
    type: REMOVE_TODO,
    id
  }
);
