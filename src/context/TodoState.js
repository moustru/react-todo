import React, { useState, useReducer } from 'react'
import { TodoContext } from './TodoContext'
import { TodoReducer } from './TodoReducer'
import { ADD_NOTE, REMOVE_NOTE } from './types'

export const TodoState = ({ children }) => {
  let [ id, incrementId ] = useState(0)
  const initialState = {
    notes: []
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const addNote = title => {
    const payload = {
      id,
      title,
      date: new Date().toJSON()
    }

    dispatch({
      type: ADD_NOTE,
      payload
    })

    incrementId(++id)
  }

  const removeNote = id => {
    dispatch({
      type: REMOVE_NOTE,
      payload: id
    })
  }

  return (
    <TodoContext.Provider value={{
      addNote,
      removeNote,
      notes: state.notes
    }}>
      {children}
    </TodoContext.Provider>
  )
}