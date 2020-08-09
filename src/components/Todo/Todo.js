import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '@/redux/actions';
import './Todo.scss';

const date = new Intl.DateTimeFormat('ru', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});

const Todo = ({ data, removeTodoFromStore }) => (
  <div className="todo">
    <div className="todo-text">
      <span className="todo-text__title">{data.title}</span>
      <span className="todo-text__date">{ date.format(data.date) }</span>
    </div>
    <button
      type="button"
      className="todo-button todo-button_check"
    >
      &#10004;
    </button>
    <button
      type="button"
      className="todo-button todo-button_remove"
      onClick={() => removeTodoFromStore(data.id)}
    >
      &#10008;
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeTodoFromStore: id => dispatch(removeTodo(id))
});

export default connect(null, mapDispatchToProps)(Todo);
