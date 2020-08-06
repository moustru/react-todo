import { ADD_NOTE, REMOVE_NOTE } from './types'

const handlers = {
  [ADD_NOTE]: (state, { payload }) => ({
    notes: [...state.notes, payload]
  }),

  [REMOVE_NOTE]: (state, { payload }) => ({
    notes: state.notes.filter(note => note.id !== payload)
  }),

  DEFAULT: state => state
}

export const TodoReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
