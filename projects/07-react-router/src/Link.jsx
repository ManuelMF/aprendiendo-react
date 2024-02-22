import { EVENTS } from './const'

export function navigate(href) {
  window.history.pushState({}, '', href)

  // Crear un evento personalizado para avisar que cambiamos de url
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // Lo lanzamos
  window.dispatchEvent(navigationEvent)
}
