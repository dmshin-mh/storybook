import type { Preview } from '@storybook/react-vite';

import '../src/index.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			test: 'todo',
		},
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'gray', value: '#f5f7f8' },
			],
		},
	},
};

export default preview;
