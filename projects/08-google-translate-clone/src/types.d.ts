// cuando es un objeto solemos usar interface en vez de type
export interface State {
  fromLanguage: string
  toLanguage: string
  fromTexto: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE', payload: string }
  | { type: 'SET_TO_LANGUAGES', payload: string }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }
