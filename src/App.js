import React from 'react';
import { FormComponent, TodoList } from './components';
import './index.scss';

export const App = () => (
  <div className="wrapper">
    <FormComponent />
    <TodoList />
  </div>
);
