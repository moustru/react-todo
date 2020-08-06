import React, { useContext } from 'react'
import { TodoContext } from '@/context/TodoContext'

export const Todo = ({ data }) => {
  const todoContext = useContext(TodoContext)

  return (
    <div className="todo" style={styles.todo}>
      <span>{data.title}</span>
      <button style={styles.todo.button} onClick={() => todoContext.removeNote(data.id)}>X</button> 
    </div>
  )
}

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
}
