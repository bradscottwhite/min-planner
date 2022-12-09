/**
 * Service functions to interact with tasks in db
 */

import { Dispatch, SetStateAction } from 'react';

import { API } from 'aws-amplify';
import { listTasks } from '../graphql/queries';
import {
  createTask,
  updateTask,
  deleteTask
} from '../graphql/mutations';
import {
  ListTasksQuery,
  Task,
  CreateTaskInput,
  UpdateTaskInput
} from '../API';

/**
 * Fetches data from the api and puts it into the `tasks` state
 */
export const getTasks = async (setTasks: Dispatch<SetStateAction<Task[]>>) => {
  try {
    const taskData = (await API.graphql({
      query: listTasks,
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })) as {
      data: ListTasksQuery
    };
    setTasks(taskData.data.listTasks?.items as Task[]);
  } catch (err) {
    console.log('error fetching tasks: ', err);
  }
};

/**
 * Adds task to db
 */
export const addTask = async (task: CreateTaskInput) => {
  try {
    await API.graphql({
      query: createTask,
      variables: { input: task },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
  } catch (err) {
    console.log('erroring creating task: ', err);
  }
};

/**
 * Updates task in db
 */
export const editTask = async (newTask: UpdateTaskInput) => {
  try {
    await API.graphql({
      query: updateTask,
      variables: { input: newTask },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
  } catch (err) {
    console.log('error updating task: ', err);
  }
};

/**
 * Delete task in db
 */
export const delTask = async (id: string) => {
  try {
    await API.graphql({
      query: deleteTask,
      variables: { input: { id } },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
  } catch (err) {
    console.log('error deleting task: ', err);
  }
};
