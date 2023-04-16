import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'

export default defineConfig({
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    plugins: [
        react(),
        laravel({
            input: ['resources/ts/app.ts'],
            refresh: true,
        }),
    ],
});
