import { fn } from '@storybook/test';

import Task from './Task';

export const ActionsData = {
	onArchiveTask: fn(),
	onPinTask: fn(),
};

export default {
	component: Task,
	title: 'Task',
	tags: ['autodocs'],
	//👇 Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
	args: {
		...ActionsData,
	},
};
/*To tell Storybook about the component we are documenting and testing, we create a default export that contains:

component -- the component itself
title -- how to group or categorize the component in the Storybook sidebar
tags -- to automatically generate documentation for our components
excludeStories-- additional information required by the story but should not be rendered in Storybook
args -- define the action args that the component expects to mock out the custom events 
To define our stories, we'll use Component Story Format 3 (also known as CSF3 ) to build out each of our test cases. 
https://storybook.js.org/docs/api/csf*/

export const Default = {
	args: {
		task: {
			id: '1',
			title: 'Test Task',
			state: 'TASK_INBOX',
		},
	},
};

export const Pinned = {
	args: {
		task: {
			...Default.args.task,
			state: 'TASK_PINNED',
		},
	},
};

export const Archived = {
	args: {
		task: {
			...Default.args.task,
			state: 'TASK_ARCHIVED',
		},
	},
};
