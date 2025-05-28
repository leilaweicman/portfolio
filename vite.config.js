import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

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
        rollupOptions: {
            input: {
                about: resolve(__dirname, 'resources/js/Pages/About.jsx'),
            },
          },
        manifest: true,
        outDir: 'public/build',
        emptyOutDir: true,
    },
});
