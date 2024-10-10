import { createContext, useReducer } from 'react'

export const MoodsContext = createContext()

export const moodsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOODS':
      return { 
        moods: action.payload 
      }
    case 'CREATE_MOOD':
      return { 
        moods: [action.payload, ...state.moods] 
      }
    case 'DELETE_MOOD':
      return {
        moods: state.moods.filter(m => m._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const MoodsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moodsReducer, { 
    moods: null
  })
  
  return (
    <MoodsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </MoodsContext.Provider>
  )
}