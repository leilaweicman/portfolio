import '../css/app.css';
//import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const pages = import.meta.env.PROD
  ? import.meta.glob('/app/resources/js/Pages/**/*.jsx')
  : import.meta.glob('./Pages/**/*.jsx');

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const path = `./Pages/${name}.jsx`;
        console.log('⏎ Resolving:', path);
        return resolvePageComponent(path, pages);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
