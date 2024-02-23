import { Link } from '../Link'

export default function Page404() {
  return (
    <>
      <div>
        <h1>This is Not Fine</h1>
        <img
          src="https://thenib.com/wp-content/uploads/2019/08/this-is-not-fine-001-dae9d5-1.png"
          alt="This is not Fine"
        />
        <Link to="/">Volver a la Home</Link>
      </div>
    </>
  )
}
