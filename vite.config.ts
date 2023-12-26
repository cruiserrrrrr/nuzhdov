import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/my-app/',
    server: {
        host: 'localhost',
        port: 3333,
    },
    plugins: [react()],
})
