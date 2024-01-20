// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random image', async ({ page }) => {
  await page.goto(LOCALHOST_URL) // ruta donde tiene que ir

  // obtenemos la page
  // const text = await page.getByRole('paragraph')
  // se hace asi porque la app es sencilla sino tendriamos que hacer getbyRole dentro del selector x recuperame la imagen
  const image = await page.getByRole('img')

  // obtenemos el texto
  // const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  // logica
  // await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('')).toBeTruthy()

})
