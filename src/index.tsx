import { Hono } from 'hono'
import type { FC } from 'hono/jsx'

const Layout: FC = () => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </head>
      <body>
        <h1>Hello Hono in JSX</h1>
      </body>
    </html>
  )
}

const app = new Hono()

app.get('/', (c) => {
  return c.html(<Layout />)
})

export default app
