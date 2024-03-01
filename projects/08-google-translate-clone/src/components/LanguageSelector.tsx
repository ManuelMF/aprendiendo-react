import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'

export const LanguageSelector = (
  { onChange }: { onChange: (language: string) => void }
): JSX.Element => {
  return (
    <Form.Select aria-label='Selecciona el idioma'>
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
