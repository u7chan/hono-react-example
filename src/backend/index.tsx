import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'

const app = new Hono()

app.notFound((c) => {
  return c.html(renderToString(<div>404 Not found</div>))
})

app.get('/', (c) => {
  return c.html(
    renderToString(
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          {process.env.NODE_ENV === 'production' || import.meta.env.PROD ? (
            <script type='module' src='/static/client.js' />
          ) : (
            <script type='module' src='/src/frontend/client.tsx' />
          )}
        </head>
        <body>
          <div id='root' />
        </body>
      </html>,
    ),
  )
})

export default app
