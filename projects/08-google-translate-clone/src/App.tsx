import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button } from 'react-bootstrap'

import './App.css'
import { useStore } from './hook/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'

function App (): JSX.Element {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguages, setToLanguages } = useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          <LanguageSelector
            type='from'
            value={fromLanguage}
            onChange={setFromLanguages}
          />
          {fromLanguage}
        </Col>

        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <h2>To</h2>
          <LanguageSelector
            type='to'
            value={toLanguage}
            onChange={setToLanguages}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App
