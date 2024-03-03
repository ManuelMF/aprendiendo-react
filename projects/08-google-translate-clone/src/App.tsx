import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'

import './App.css'
import { useStore } from './hook/useStore'
import { AUTO_LANGUAGE } from './constants'
import { LanguageSelector, ArrowsIcon, TextArea } from './components'
import { SectionType } from './types.d'

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
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
