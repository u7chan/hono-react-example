import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {
      ssr: {
        external: ['react', 'react-dom'],
      },
      plugins: [
        devServer({
          entry: 'src/backend/index.tsx',
        }),
      ],
      optimizeDeps: {
        entries: [],
      },
    }
  }
  return {
    build: {
      rollupOptions: {
        input: './src/frontend/client.tsx',
        output: {
          entryFileNames: 'static/client.js',
        },
      },
    },
  }
})
