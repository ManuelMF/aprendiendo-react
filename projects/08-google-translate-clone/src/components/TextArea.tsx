import { Form } from 'react-bootstrap'
import { type FC } from 'react'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  placeholder: string
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: 0, height: '200px' }

const getPlaceHolder = ({
  type,
  loading
}: {
  type: SectionType
  loading?: boolean
}) => {}

export const TextArea: FC<Props> = ({
  type,
  placeholder,
  loading,
  value,
  onChange
}) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: '#f5f5f5' }
  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea'
      placeholder={placeholder}
      style={styles}
    />
  )
}
