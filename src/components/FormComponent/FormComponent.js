import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '@/redux/actions';
import './FormComponent.scss';

const FormComponent = ({ addTodoFromStore }) => {
  const [ todoValue, setTodoValue ] = useState('');

  const handleAddingTodo = () => {
    addTodoFromStore(todoValue);
    setTodoValue('');
  };

  return (
    <div className="form">
      <input
        type="text"
        className="form-input"
        placeholder="Введите заметку"
        value={todoValue}
        onChange={e => setTodoValue(e.target.value)}
      />
      <button
        type="submit"
        className="form-button"
        onClick={handleAddingTodo}
      >
        &#10148;
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodoFromStore: title => dispatch(addTodo(title))
});

export default connect(null, mapDispatchToProps)(FormComponent);
