import { FC } from 'react';

import { Link } from 'react-router-dom';

import { motion, Variants } from 'framer-motion';

import { Tasks } from './Tasks';

import { Task as TaskType } from '../API';

const vars: Variants = {
	closed: { opacity: 0 },
	open: { opacity: 1 }
};

/**
 * Displays card to house tasks and add task button
 */
export const Card: FC<{
	tasks: TaskType[];
	cardName: string;
	cardKey: string;
}> = ({ tasks, cardName, cardKey }) => (
	<motion.div
		variants={vars}
		exit='closed'
		className='flex-none w-80 bg-slate-300 shadow-lg rounded p-6 mx-3 h-min'
	>
		<h3 className='text-xl font-semibold'>{cardName}</h3>
		<div>
			{/* Displays tasks for card: */}
			<Tasks tasks={tasks} />
			<Link
				className='add grid grid-row-1 place-items-center'
				to={`/min-planner/addTask/${cardKey}`}
			>
				<ion-icon name="add-outline"></ion-icon>
			</Link>
		</div>
	</motion.div>
);
