// rendering the story in Storybook

// the TaskList component is now a connected component and relies on a Redux store to render the tasks. As our InboxScreen is also a connected component, we'll do something similar and provide a store to the story.

// import InboxScreen from './InboxScreen';
// import store from '../lib/store';
// import { http, HttpResponse } from 'msw';

// import { MockedState } from './TaskList.stories';

// import { Provider } from 'react-redux';

// export default {
// 	component: InboxScreen,
// 	title: 'InboxScreen',
// 	decorators: [(story) => <Provider store={store}>{story()}</Provider>],
// 	tags: ['autodocs'],
// };

// export const Default = {
// 	parameters: {
// 		msw: {
// 			handlers: [
// 				http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
// 					return HttpResponse.json(MockedState.tasks);
// 				}),
// 			],
// 		},
// 	},
// };

// export const Error = {
// 	parameters: {
// 		msw: {
// 			handlers: [
// 				http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
// 					return new HttpResponse(null, {
// 						status: 403,
// 					});
// 				}),
// 			],
// 		},
// 	},
// };

// error story. Instead of displaying the right state, it shows a list of tasks.
// One way to sidestep this issue would be to provide a mocked version for each state, similar to what we did in the last chapter. Instead, we'll use a well-known API mocking library alongside a Storybook addon to help us solve this issue.
// Mock Service Worker is an API mocking library.
// In your terminal, run the following command to generate a generic service worker inside your public folder:

// yarn init-msw

// Then, we'll need to update our .storybook/preview.js and initialize them.
// Finally, update the InboxScreen stories and include a parameter that mocks the remote API calls

/*

//------------------------------------
So far, we've been able to build a fully functional application from the ground up, starting from a simple component up to a screen and continuously testing each change using our stories. But each new story also requires a manual check on all the other stories to ensure the UI doesn't break. That's a lot of extra work.

Can't we automate this workflow and test our component interactions automatically?
 */

// Storybook's play function and @storybook/addon-interactions enable component testing by simulating user interactions after the story renders. Using framework-agnostic DOM APIs, the play function ensures compatibility across frontend frameworks. The addon enhances testing with step-by-step visualization and controls to pause, resume, rewind, and step through interactions, helping verify UI behavior effectively.

import InboxScreen from './InboxScreen';

import store from '../lib/store';

import { http, HttpResponse } from 'msw';

import { MockedState } from './TaskList.stories';

import { Provider } from 'react-redux';

import {
	fireEvent,
	waitFor,
	within,
	waitForElementToBeRemoved,
} from '@storybook/test';

export default {
	component: InboxScreen,
	title: 'InboxScreen',
	decorators: [(story) => <Provider store={store}>{story()}</Provider>],
	tags: ['autodocs'],
};

export const Default = {
	parameters: {
		msw: {
			handlers: [
				http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
					return HttpResponse.json(MockedState.tasks);
				}),
			],
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Waits for the component to transition from the loading state
		await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
		// Waits for the component to be updated based on the store
		await waitFor(async () => {
			// Simulates pinning the first task
			await fireEvent.click(canvas.getByLabelText('pinTask-1'));
			// Simulates pinning the third task
			await fireEvent.click(canvas.getByLabelText('pinTask-3'));
		});
	},
};

export const Error = {
	parameters: {
		msw: {
			handlers: [
				http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
					return new HttpResponse(null, {
						status: 403,
					});
				}),
			],
		},
	},
};

//  The @storybook/test package replaces the @storybook/jest and @storybook/testing-library testing packages, offering a smaller bundle size and a more straightforward API based on the Vitest package.

//---

// Storybook test runner turns all of your stories into executable tests. It is powered by Jest and Playwright.
// https://storybook.js.org/docs/writing-tests/test-runner