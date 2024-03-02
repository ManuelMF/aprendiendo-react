import { useReducer } from 'react'
import { type StoreFunctions, type Action, type State, type Language, type FromLanguage } from '../types.d'
import { AUTO_LANGUAGE } from '../constants'

// 1. Create a initialState
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Create a reducer
function reducer (state: State, action: Action): State {
  const { type } = action

  switch (type) {
    case 'INTERCHANGE_LANGUAGES': {
      if (state.fromLanguage === AUTO_LANGUAGE) return state

      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }

    case 'SET_FROM_LANGUAGE': {
      return {
        ...state,
        fromLanguage: action.payload
      }
    }

    case 'SET_TO_LANGUAGES': {
      return {
        ...state,
        toLanguage: action.payload
      }
    }

    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }

    case 'SET_RESULT': {
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    }

    default:
      return state
  }
}

export function useStore (): StoreFunctions {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = (): void => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguages = (payload: FromLanguage): void => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguages = (payload: Language): void => {
    dispatch({ type: 'SET_TO_LANGUAGES', payload })
  }
  const setFromText = (payload: string): void => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string): void => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguages,
    setToLanguages,
    setFromText,
    setResult
  }
}
