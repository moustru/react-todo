import React from 'react'

const styles = {
  todo: {
    marginBottom: '20px',
    padding: '15px 10px',
    backgroundColor: '#a5a5a5'
  }
}

export const Todo = () => {
  return (
    <div className="todo" style={styles.todo}>
      <span className="todo__title">Title</span>
    </div>
  )
}
