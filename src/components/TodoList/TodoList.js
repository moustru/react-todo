import React from 'react';
import { connect } from 'react-redux';
import Todo from '@/components/Todo/Todo';
import './TodoList.scss';

const TodoList = ({ todos }) => (
  <div className="todo-list">
    {
      todos.length
        ? todos.map(todo => <Todo key={todo.id} data={todo} />)
        : <h1>Нет данных</h1>
    }
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps)(TodoList);
