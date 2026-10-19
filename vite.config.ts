import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/DeveloperToolsSite/',
  plugins: [
    react(),
    {
      name: 'github-pages-404',
      apply: 'build',
      writeBundle({ dir }) {
        const outputDirectory = resolve(dir ?? 'dist')
        copyFileSync(
          resolve(outputDirectory, 'index.html'),
          resolve(outputDirectory, '404.html'),
        )
      },
    },
  ],
})
