// rendering the story in Storybook

// the TaskList component is now a connected component and relies on a Redux store to render the tasks. As our InboxScreen is also a connected component, we'll do something similar and provide a store to the story.

import InboxScreen from './InboxScreen';
import store from '../lib/store';
import { http, HttpResponse } from 'msw';

import { MockedState } from './TaskList.stories';

import { Provider } from 'react-redux';

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

// error story. Instead of displaying the right state, it shows a list of tasks.
// One way to sidestep this issue would be to provide a mocked version for each state, similar to what we did in the last chapter. Instead, we'll use a well-known API mocking library alongside a Storybook addon to help us solve this issue.
// Mock Service Worker is an API mocking library.
// In your terminal, run the following command to generate a generic service worker inside your public folder:

// yarn init-msw

// Then, we'll need to update our .storybook/preview.js and initialize them.
// Finally, update the InboxScreen stories and include a parameter that mocks the remote API calls:
