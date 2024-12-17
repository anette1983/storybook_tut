/** @type { import('@storybook/react-vite').StorybookConfig } */
// We'll need to make a couple of changes to Storybook's configuration files so it notices our recently created stories and allows us to use the application's CSS file (located in src/index.css).
// plus add changes to preview js
const config = {
	// stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	staticDirs: ['../public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
};
export default config;
