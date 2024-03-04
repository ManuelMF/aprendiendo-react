import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { translate } from '../../08-backend/src/services/translate'
import './App.css'
import { useStore } from './hook/useStore'
import { AUTO_LANGUAGE } from './constants'
import {
  LanguageSelector,
  ArrowsIcon,
  TextArea,
  ClipboardIcon
} from './components'
import { SectionType } from './types.d'
import { useEffect } from 'react'
import { useDebounce } from './hook/useDebounce'

function App(): JSX.Element {
  const {
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
  } = useStore()
  const debouncedFromText = useDebounce(fromText, 200)

  useEffect(() => {
    if (debouncedFromText === '') return

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then((result) => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <h2>From</h2>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguages}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button
            variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <h2>To</h2>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguages}
            />
            <div style={{ position: 'relative' }}>
              <TextArea
                loading={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
              />
              <Button
                variant='link'
                style={{ position: 'absolute', left: 0, bottom: 0 }}
                onClick={handleClipboard}
              >
                <ClipboardIcon />
              </Button>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App