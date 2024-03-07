import express from 'express'
import cors from 'cors'
import { translate } from './services/translate.js'
const app = express()

app.use(cors())

app.use(express.json())

app.post('/getTranslation', async (req, res) => {
  const { fromLanguage, toLanguage, text } = req.body

  const translateResponse = await translate({ fromLanguage, toLanguage, text })

  res.json({
    status: 1,
    message: translateResponse
  })
})

const port = 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
