import { Hono } from 'hono'
import { setSignedCookie } from 'hono/cookie'
import { renderToString } from 'react-dom/server'

const app = new Hono()
const prod = !!(process.env.NODE_ENV === 'production' || import.meta.env.PROD)

function signIn(username: string, password: string): boolean {
  // dummy
  return username === 'dummy' && password === 'test'
}

app.post('/api/signin', async (c) => {
  const { username, password } = await c.req.json()
  if (!signIn(username, password)) {
    return new Response('Unauthorized', { status: 401 })
  }
  await setSignedCookie(c, 'session-token', '', 'secret_dayo_1234', {
    path: '/',
    prefix: prod ? 'secure' : undefined,
    secure: prod,
    httpOnly: true,
    maxAge: 3600,
    sameSite: 'Strict',
  })
})

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
          {prod ? (
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
