import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <>
      <h1>Hello Hono with React SPA</h1>
    </>
  )
}

const root = document.getElementById('root')
root && createRoot(root).render(<App />)
