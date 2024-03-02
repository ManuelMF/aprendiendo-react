import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { type FC } from 'react'
import { type SectionType, type FromLanguage, type Language } from '../types.d'

// Tenemos dos contratos diferentes para las mismos props según el type que le indiquemos
type Props =
| { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
| { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }): JSX.Element => {
  const hanleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={hanleChange} value={value}>
      {type === 'from' && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
