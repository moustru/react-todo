import React from 'react'
import { FormComponent, TodoList } from './components'
import { TodoState } from './context/TodoState'
import './index.scss'

export const App = () => {
  return (
    <TodoState>
      <div className="wrapper">
        <FormComponent />
        <TodoList />
      </div>
    </TodoState>
  )
}
