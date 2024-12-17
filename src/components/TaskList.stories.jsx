/* eslint-disable react/prop-types */
// create Tasklist’s test states in the story file.

// import TaskList from './TaskLIst';

// import * as TaskStories from './Task.stories';

// export default {
// 	component: TaskList,
// 	title: 'TaskList',
// 	decorators: [(story) => <div style={{ margin: '3rem' }}>{story()}</div>],
// 	tags: ['autodocs'],
// 	args: {
// 		...TaskStories.ActionsData,
// 	},
// };

// export const Default = {
// 	args: {
// 		// Shaping the stories through args composition.
// 		// The data was inherited from the Default story in Task.stories.jsx.
// 		tasks: [
// 			{ ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
// 			{ ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
// 			{ ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
// 			{ ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
// 			{ ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
// 			{ ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
// 		],
// 	},
// };

// export const WithPinnedTasks = {
// 	args: {
// 		tasks: [
// 			...Default.args.tasks.slice(0, 5),
// 			{ id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
// 		],
// 	},
// };

// export const Loading = {
// 	args: {
// 		tasks: [],
// 		loading: true,
// 	},
// };

// export const Empty = {
// 	args: {
// 		// Shaping the stories through args composition.
// 		// Inherited data coming from the Loading story.
// 		...Loading.args,
// 		loading: false,
// 	},
// };

// Decorators are a way to provide arbitrary wrappers to stories. In this case we’re using a decorator key on the default export to add some margin around the rendered component. They can also be used to wrap stories in “providers”-–i.e., library components that set React context.
// That way, the data and actions (mocked callbacks) expected by both components are preserved.

// use a decorator and provide a mocked store-- in our Storybook stories

import TaskList from './TaskLIst';

import * as TaskStories from './Task.stories';

import { Provider } from 'react-redux';

import { configureStore, createSlice } from '@reduxjs/toolkit';

// A super-simple mock of the state of the store
export const MockedState = {
	tasks: [
		{ ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
		{ ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
		{ ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
		{ ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
		{ ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
		{ ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
	],
	status: 'idle',
	error: null,
};

// A super-simple mock of a redux store
const Mockstore = ({ taskboxState, children }) => (
	<Provider
		store={configureStore({
			reducer: {
				taskbox: createSlice({
					name: 'taskbox',
					initialState: taskboxState,
					reducers: {
						updateTaskState: (state, action) => {
							const { id, newTaskState } = action.payload;
							const task = state.tasks.findIndex((task) => task.id === id);
							if (task >= 0) {
								state.tasks[task].state = newTaskState;
							}
						},
					},
				}).reducer,
			},
		})}
	>
		{children}
	</Provider>
);

export default {
	component: TaskList,
	title: 'TaskList',
	decorators: [(story) => <div style={{ margin: '3rem' }}>{story()}</div>],
	tags: ['autodocs'],
	// args: {
	// 	...TaskStories.ActionsData,
	// },
	excludeStories: /.*MockedState$/,
};

export const Default = {
	// args: {
	// 	// Shaping the stories through args composition.
	// 	// The data was inherited from the Default story in Task.stories.jsx.
	// 	tasks: [
	// 		{ ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
	// 		{ ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
	// 		{ ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
	// 		{ ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
	// 		{ ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
	// 		{ ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
	// 	],
	// },
	decorators: [
		(story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
	],
};

// export const WithPinnedTasks = {
// 	args: {
// 		tasks: [
// 			...Default.args.tasks.slice(0, 5),
// 			{ id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
// 		],
// 	},
// };

export const WithPinnedTasks = {
	decorators: [
		(story) => {
			const pinnedtasks = [
				...MockedState.tasks.slice(0, 5),
				{ id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
			];

			return (
				<Mockstore
					taskboxState={{
						...MockedState,
						tasks: pinnedtasks,
					}}
				>
					{story()}
				</Mockstore>
			);
		},
	],
};

// export const Loading = {
// 	args: {
// 		tasks: [],
// 		loading: true,
// 	},
// };

export const Loading = {
	decorators: [
		(story) => (
			<Mockstore
				taskboxState={{
					...MockedState,
					status: 'loading',
				}}
			>
				{story()}
			</Mockstore>
		),
	],
};

// export const Empty = {
// 	args: {
// 		// Shaping the stories through args composition.
// 		// Inherited data coming from the Loading story.
// 		...Loading.args,
// 		loading: false,
// 	},
// };

export const Empty = {
	decorators: [
		(story) => (
			<Mockstore
				taskboxState={{
					...MockedState,
					tasks: [],
				}}
			>
				{story()}
			</Mockstore>
		),
	],
};