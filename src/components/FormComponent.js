import React, { useState, useContext } from 'react'
import { TodoContext } from '@/context/TodoContext'

export const FormComponent = () => {
  const [ todoValue, setTodoValue ] = useState('')
  const todoContext = useContext(TodoContext)

  const addTodoInComponent = () => {
    todoContext.addNote(todoValue)
    setTodoValue('')
  }

  return (
    <div style={styles.form}>
      <input
        type="text"
        placeholder="Введите заметку"
        style={styles.form.input}
        value={todoValue}
        onChange={e => setTodoValue(e.target.value)}
      />
      <button
        style={styles.form.button}
        onClick={addTodoInComponent}
      >
        &#10148;
      </button>
    </div>
  )
}

const styles = {
  form: {
    width: '30%',
    marginBottom: '30px',

    input: {
      width: '80%',
      marginRight: '20px',
      padding: '10px 0',
      border: 'none',
      borderBottom: '2px solid'
    },

    button: {
      width: 'calc(20% - 20px)',
      padding: '10px',
      fontSize: '20px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all .2s ease'
    }
  }
}