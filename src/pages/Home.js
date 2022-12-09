import { FC } from 'react';

import {
	Task as TaskType,
	Cards as CardType
} from '../API';

import { Cards } from '../comps/Cards';

/**
 * Displays home route
 */
export const Home: FC<{
	tasks: TaskType[],
	cards: string[]
}> = ({ tasks, cards }) => (
	<Cards
		tasks={tasks}
		cards={cards}
	/>
);
