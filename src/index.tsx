import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'

const app = new Hono()

const TestFC = ({ title }: { title: string }) => {
  return <h1>{title}</h1>
}

app.get('/', (c) => {
  return c.html(
    renderToString(
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
        </head>
        <body>
          <TestFC title='Hello Hono with React' />
        </body>
      </html>,
    ),
  )
})

export default app
