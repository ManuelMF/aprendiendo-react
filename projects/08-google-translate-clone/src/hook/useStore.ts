import { useReducer } from 'react'
import { type StoreFunctions, type Action, type State, Language, FromLanguage } from '../types'

// 1. Create a initialState
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromTexto: '',
  result: '',
  loading: false
}

// 2. Create a reducer
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function reducer (state: State, action: Action) {
  const { type } = action

  switch (type) {
    case 'INTERCHANGE_LANGUAGES': {
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
    fromTexto,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguages = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguages = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGES', payload })
  }
  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromTexto,
    result,
    loading,
    interchangeLanguages,
    setFromLanguages,
    setToLanguages,
    setFromText,
    setResult
  }
}
