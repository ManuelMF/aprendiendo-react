import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My app works as expected', async () => {
  const app = render(<App />)

  const user = userEvent.setup()
  const textareaFrom = app.getByPlaceholderText('Introducir texto')

  await user.type(textareaFrom, 'Hola mundo')
  // esperamos que en algún sitio este hello world
  const result = await app.findByDisplayValue(/Hello world/i)

  expect(result).toBeTruthy()
})
