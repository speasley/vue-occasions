import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/plugins/VueOccasions/'),
      name: 'vue-occasions',
      fileName: (format) => `${format}.js`,
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  },
  plugins: [vue()],
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html']
    }
  }
})
