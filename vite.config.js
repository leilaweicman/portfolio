import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: 'https://portfolio-production-00d9.up.railway.app/',
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
            buildDirectory: 'build',
        }),
        react(),
    ],
    build: {
        manifest: true,
        outDir: 'public/build',
        emptyOutDir: true,
    },
});
