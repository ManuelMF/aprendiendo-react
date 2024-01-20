import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
  const [image, setImage] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const url = getImageUrlByName(data.fact[0])
        setImage(url)
      })
  }, [])

  return (
    <main>
      <h1>App gatos</h1>
      {image && <img src={image} alt="Image extracted using the first word" />}
    </main>
  )
}

function getImageUrlByName(name) {
  return `https://cataas.com/cat/says/${name}?size=50&color=red`
}
