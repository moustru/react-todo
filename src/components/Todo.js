import React from 'react';

export const Todo = ({ data, onRemove }) => {
  const remove = () => {
    onRemove(data.id);
  };

  return (
    <div className="todo" style={styles.todo}>
      <span>{data.title}</span>
      <button
        type="submit"
        style={styles.todo.button}
        onClick={remove}
      >
        X
      </button>
    </div>
  );
};

const styles = {
  todo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '15px 10px',
    backgroundColor: '#a5a5a5',

    button: {
      backgroundColor: 'transparent',
      fontSize: '18px',
      border: 'none',
      cursor: 'pointer'
    }
  }
};
