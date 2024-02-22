import { EVENTS } from './const'

export function navigate(href) {
  window.history.pushState({}, '', href)

  // Crear un evento personalizado para avisar que cambiamos de url
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // Lo lanzamos
  window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    // controlar posibles clicks
    const isMainEvent = event.button === 0 // primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target == '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault() //evitar se sea MPAs
      navigate(to) // Navegacion por SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
