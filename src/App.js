import React, { useState } from 'react';
import { FormComponent, TodoList } from './components';
import './index.scss';

export const App = () => {
  const [ todos, setTodos ] = useState([]);
  let [ id, incrementId ] = useState(0);

  const addTodo = title => {
    setTodos([
      ...todos,
      {
        id,
        date: new Date(),
        title
      }
    ]);

    incrementId(++id);
  };

  const removeTodo = i => {
    setTodos(todos.filter(item => item.id !== i));
  };

  return (
    <div className="wrapper">
      <FormComponent addTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
};
