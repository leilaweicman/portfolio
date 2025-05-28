import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    root: '.',
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
            buildDirectory: 'build',
            useHttps: true,
        }),
        react(),
    ],
    build: {
        manifest: true,
        outDir: 'public/build',
        emptyOutDir: true,
    },
});
