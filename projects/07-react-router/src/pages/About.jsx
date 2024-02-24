import { Link } from '../Link'

import useI18n from '../hook/useI18n'

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFRqaawWza3Qw/profile-displayphoto-shrink_200_200/0/1708110878486?e=1714003200&v=beta&t=7FS3-av3ePN51ikEf-AIQfDbFryHNENj7Kvy3io0Yp4"
          alt="Foto de perfil"
        />
        <p>{i18n.description}</p>
        <Link to="/">{i18n.button}</Link>
      </div>
    </>
  )
}
