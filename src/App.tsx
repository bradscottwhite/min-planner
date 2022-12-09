import { useState, useEffect } from 'react';

import {
	Route,
	Routes,
	BrowserRouter as Router
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';

// Service rest api functions:
import { getTasks } from './servs/taskFns';
import { getCards } from './servs/cardFns';

import { Home } from './pages/Home';
import { AddTask } from './pages/AddTask';
import { Edit } from './pages/Edit';

import { Header } from './comps/Header';

import { Task as TaskType } from './API';

Amplify.configure(awsExports);

/**
 * Displays app with routes: home, addTask or edit
 */
const App = () => {
	const [ tasks, setTasks ] = useState<TaskType[]>([]);
	const [ cards, setCards ] = useState<string[]>([]);

	// This will run when component mounts (page loads) and populate us with initial tasks and cards:
	useEffect(() => {
		getTasks(setTasks);
		getCards(setCards);
	}, []);

	/* Colors: timberwolf, laural-green, dark-sea-green, battleship-grey, independence */
	return (
		<AnimatePresence>
			<Authenticator>
				{({ signOut, user }) => (
					<Router>
						<div className='font-sans h-screen w-screen'>
							<Header signOut={signOut}/>
							<div className='pt-20'>
								<Routes>
									<Route
										path='/'
										element={<Home
											tasks={tasks}
											cards={cards}
										/>}
									/>
									<Route
										path='/addTask/:key'
										element={<AddTask
											tasks={tasks}
											cards={cards}
											setTasks={setTasks}
										/>}
									/>
									<Route
										path='/edit/:id'
										element={<Edit
											cards={cards}
											tasks={tasks}
											setTasks={setTasks}
										/>}
									/>
								</Routes>
							</div>
						</div>
					</Router>
				)}
			</Authenticator>
		</AnimatePresence>
	);
};

export default App;
