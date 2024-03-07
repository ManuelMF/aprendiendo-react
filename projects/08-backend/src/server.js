import express from 'express'
import cors from 'cors'
import { translate } from './services/translate.js'
const app = express()

app.use(cors())

app.use(express.json())

app.post('/getTranslation', async (req, res) => {
  const { fromLanguage, toLanguages, text } = req.body

  const translateResponse = await translate({ fromLanguage, toLanguages, text })

  res.json({
    message: 'Datos recibidos correctamente',
    data: translateResponse
  })
})

const port = 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
