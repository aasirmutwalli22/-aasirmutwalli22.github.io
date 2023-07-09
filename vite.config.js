import path, { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    publicDir: path.resolve(__dirname, 'src/public'),
    server: {
        port: 8080,
        hot: true
    },
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html')
            },
        },
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
})