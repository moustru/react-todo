import React, { useState } from 'react'

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

export const FormComponent = () => {
  const [ todoValue, setTodoValue ] = useState('')

  const addTodo = () => {
    console.log(`Note: ${todoValue}`)
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
        onClick={addTodo}
      >
        &#10148;
      </button>
    </div>
  )
}
