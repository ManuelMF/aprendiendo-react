import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.get('/api/data', (req, res) => {
  res.send('¡Hola desde TypeScript y Express!')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
