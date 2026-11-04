import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

// After a new deploy, an open tab may request a JS chunk that no longer exists.
// Reload once to pick up the new version instead of leaving the page broken.
window.addEventListener('vite:preloadError', (event) => {
	const key = 'vite-preload-reloaded';
	if (sessionStorage.getItem(key)) return;
	sessionStorage.setItem(key, '1');
	event.preventDefault();
	window.location.reload();
});
window.addEventListener('load', () => sessionStorage.removeItem('vite-preload-reloaded'));

const container = document.getElementById('root');

if (container.hasChildNodes()) {
	// Page was prerendered at build time: attach React to the existing HTML
	ReactDOM.hydrateRoot(container, <App />);
} else {
	ReactDOM.createRoot(container).render(<App />);
}
