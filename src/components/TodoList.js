import React, { useContext } from 'react'
import { Todo } from './Todo'
import { TodoContext } from '@/context/TodoContext'

export const TodoList = () => {
  const { notes } = useContext(TodoContext)

  return (
    <div className="todo-list" style={styles.list}>
      {
        notes.length
        ? notes.map((todo, index) => <Todo key={index} data={todo} />)
        : <h1>Нет данных</h1>
      }
    </div>
  )
}

const styles = {
  list: {
    width: '30%'
  }
}
