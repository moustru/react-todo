import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({ todos, onRemoveTodo }) => {
  const remove = data => {
    onRemoveTodo(data)
  }

  return (
    <div className="todo-list" style={styles.list}>
      {
        todos.length
        ? todos.map((todo, index) => <Todo key={index} data={todo} onRemove={remove} />)
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