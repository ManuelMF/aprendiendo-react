import { Link } from '../Link'

export default function AboutPage() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFRqaawWza3Qw/profile-displayphoto-shrink_200_200/0/1708110878486?e=1714003200&v=beta&t=7FS3-av3ePN51ikEf-AIQfDbFryHNENj7Kvy3io0Yp4"
          alt="Foto de perfil"
        />
        <p>Hola! Me llamo Manuel y estoy creando un clon de React Router.</p>
        <Link to="/">Ir a la home</Link>
      </div>
    </>
  )
}
