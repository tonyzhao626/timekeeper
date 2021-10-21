import * as TasksAPIUtil from '../util/tasks_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const TASK_ERROR = "TASK_ERROR";

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});

export const requestTasks = () => dispatch => (
  TasksAPIUtil.fetchTasks()
    .then(tasks => dispatch(receiveTasks(tasks)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestTask = id => dispatch => (
  TasksAPIUtil.fetchTask(id)
    .then(task => dispatch(receiveTask(task)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const createTask = data => dispatch => (
  TasksAPIUtil.createTask(data)
    .then(task => dispatch(receiveTask(task)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateTask = data => dispatch => (
  TasksAPIUtil.updateTask(data)
    .then(task => dispatch(receiveTask(task)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const destroyTask = id => dispatch => (
  TasksAPIUtil.destroyTask(id)
    .then(task => dispatch(removeTask(task)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
