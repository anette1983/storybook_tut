/* eslint-disable no-unused-vars */

// export default function Task({
// 	task: { id, title, state },
// 	onArchiveTask,
// 	onPinTask,
// }) {
// 	return (
// 		<div className='list-item'>
// 			<label htmlFor={`title-${id}`} aria-label={title}>
// 				<input
// 					type='text'
// 					value={title}
// 					readOnly={true}
// 					name='title'
// 					id={`title-${id}`}
// 				/>
// 			</label>
// 		</div>
// 	);
// }

// import PropTypes from 'prop-types';

// export default function Task({
// 	task: { id, title, state },
// 	onArchiveTask,
// 	onPinTask,
// }) {
// 	return (
// 		<div className={`list-item ${state}`}>
// 			<label
// 				htmlFor={`archiveTask-${id}`}
// 				aria-label={`archiveTask-${id}`}
// 				className='checkbox'
// 			>
// 				<input
// 					type='checkbox'
// 					disabled={true}
// 					name='checked'
// 					id={`archiveTask-${id}`}
// 					checked={state === 'TASK_ARCHIVED'}
// 				/>
// 				<span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
// 			</label>

// 			<label htmlFor={`title-${id}`} aria-label={title} className='title'>
// 				<input
// 					type='text'
// 					value={title}
// 					readOnly={true}
// 					name='title'
// 					id={`title-${id}`}
// 					placeholder='Input title'
// 				/>
// 			</label>
// 			{state !== 'TASK_ARCHIVED' && (
// 				<button
// 					className='pin-button'
// 					onClick={() => onPinTask(id)}
// 					id={`pinTask-${id}`}
// 					aria-label={`pinTask-${id}`}
// 					key={`pinTask-${id}`}
// 				>
// 					<span className={`icon-star`} />
// 				</button>
// 			)}
// 		</div>
// 	);
// }

// Task.propTypes = {
// 	/** Composition of the task */
// 	task: PropTypes.shape({
// 		/** Id of the task */
// 		id: PropTypes.string.isRequired,
// 		/** Title of the task */
// 		title: PropTypes.string.isRequired,
// 		/** Current state of the task */
// 		state: PropTypes.string.isRequired,
// 	}),
// 	/** Event to change the task to archived */
// 	onArchiveTask: PropTypes.func,
// 	/** Event to change the task to pinned */
// 	onPinTask: PropTypes.func,
// };

// We’ve now successfully built out a component without needing a server or running the entire frontend application. The next step is to build out the remaining Taskbox components one by one in a similar fashion.

// building components in isolation is easy and fast. We can expect to produce a higher-quality UI with fewer bugs and more polish because it’s possible to dig in and test every possible state.
// Catch accessibility issues
// Storybook includes an official accessibility addon.

// ----------------
// Catching ui changes

import PropTypes from 'prop-types';

export default function Task({
	task: { id, title, state },
	onArchiveTask,
	onPinTask,
}) {
	return (
		<div className={`list-item ${state}`}>
			<label
				htmlFor={`archiveTask-${id}`}
				aria-label={`archiveTask-${id}`}
				className='checkbox'
			>
				<input
					type='checkbox'
					disabled={true}
					name='checked'
					id={`archiveTask-${id}`}
					checked={state === 'TASK_ARCHIVED'}
				/>
				<span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
			</label>

			<label htmlFor={`title-${id}`} aria-label={title} className='title'>
				<input
					type='text'
					value={title}
					readOnly={true}
					name='title'
					id={`title-${id}`}
					placeholder='Input title'
					style={{ textOverflow: 'ellipsis' }}
				/>
			</label>

			{state !== 'TASK_ARCHIVED' && (
				<button
					className='pin-button'
					onClick={() => onPinTask(id)}
					id={`pinTask-${id}`}
					aria-label={`pinTask-${id}`}
					key={`pinTask-${id}`}
				>
					<span className={`icon-star`} />
				</button>
			)}
		</div>
	);
}
// This yields a new background color for the item.

Task.propTypes = {
	/** Composition of the task */
	task: PropTypes.shape({
		/** Id of the task */
		id: PropTypes.string.isRequired,
		/** Title of the task */
		title: PropTypes.string.isRequired,
		/** Current state of the task */
		state: PropTypes.string.isRequired,
	}),
	/** Event to change the task to archived */
	onArchiveTask: PropTypes.func,
	/** Event to change the task to pinned */
	onPinTask: PropTypes.func,
};
