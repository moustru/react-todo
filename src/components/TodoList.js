import React from 'react'
import { Todo } from './Todo'

const styles = {
  list: {
    width: '30%'
  }
}

export const TodoList = () => {
  return (
    <div className="todo-list" style={styles.list}>
      <Todo />
    </div>
  )
}
