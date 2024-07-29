import type { FormEvent } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formValues = Array.from(new FormData(e.currentTarget).entries()).reduce(
      (pre, [k, v]) => {
        pre[k] = v
        return pre
      },
      {} as { [k: string]: FormDataEntryValue },
    )
    console.log('#', formValues)
  }
  return (
    <>
      <h1>Hello Hono with React SPA</h1>
      <hr />
      <form style={{ display: 'inline-flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <label htmlFor='username'>
          <span>Username</span>
        </label>
        <input type='text' name='username' required />
        <label htmlFor='password'>
          <span>Password</span>
        </label>
        <input type='password' name='password' required />
        <button type='submit' style={{ marginTop: 12 }}>
          Login
        </button>
      </form>
    </>
  )
}

const root = document.getElementById('root')
root && createRoot(root).render(<App />)
