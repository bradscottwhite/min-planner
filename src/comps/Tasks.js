import { FC } from 'react';

import { motion, Variants } from 'framer-motion';

import { Task } from './Task';

import { Task as TaskType } from '../API';

const isMobile = window.innerWidth <= 768;

const vars: Variants = {
	closed: {
		opacity: 0,
		[isMobile ? 'x' : 'y']: '-50vh',
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
			staggerDirection: -1
		}
	}, open: {
		opacity: 1,
		[isMobile ? 'x' : 'y']: 0,
		transition: {
			duration: 0.5,
			delayChildren: 0.2,
			staggerChildren: 0.2,
			staggerDirection: 1
		}
	}
};

/**
 * Displays tasks fro assigned card
 */
export const Tasks: FC<{ tasks: TaskType[]; }> = ({ tasks }) => {
	tasks.sort((a, b) => a.priority - b.priority);

	return (
		<motion.div
			initial='closed'
			animate='open'
			exit='closed'
			variants={vars}
			className='grid grid-row-flow gap-2 py-2'
		>
			{/* Displays each task that belongs in card: */}
			{tasks.map((task, index) => (
				<Task
					task={task}
					index={index}
				/>
			))}
		</motion.div>
	);
};
