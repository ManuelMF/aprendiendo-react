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
  ClipboardIcon,
  SpeakerIcon
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
    const data = {
      // tus datos aquí
    }

    fetch('http://localhost:3000/getTranslation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Respuesta del servidor:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then((result) => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = (): void => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = (): void => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid>
      <h3 style={{ textAlign: 'left' }}>Google Translate</h3>
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
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  display: 'flex'
                }}
              >
                <Button variant='link' onClick={handleClipboard}>
                  <ClipboardIcon />
                </Button>
                <Button variant='link' onClick={handleSpeak}>
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
