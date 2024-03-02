import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

// cuando es un objeto solemos usar interface en vez de type
export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGES', payload: Language }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }

export interface StoreFunctions extends State {
  interchangeLanguages: () => void
  setFromLanguages: (payload: FromLanguage) => void
  setToLanguages: (payload: Language) => void
  setFromText: (payload: string) => void
  setResult: (payload: string) => void
}

export enum SectionType {
  From = 'from',
  To = 'to'
}
