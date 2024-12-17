import '../src/index.css';

// Registers the mockserviceworker addon
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize();

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	loaders: [mswLoader],
};

export default preview;

// parameters are typically used to control the behavior of Storybook's features and addons. In our case, we won't use them for that purpose. Instead, we will import our application's CSS file.
