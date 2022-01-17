import vercel from '@sveltejs/adapter-vercel';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components')
				}
			}
		}
	}
};

export default config;
