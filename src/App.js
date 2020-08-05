import React from 'react'
import { FormComponent, TodoList } from './components'
import './index.scss'

export const App = () => {
  return (
    <div className="wrapper">
      <FormComponent />
      <TodoList />
    </div>
  )
}
