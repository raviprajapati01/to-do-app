let nextTaskId = 1;

export const addTask = (title) => ({
  type: 'ADD_TASK',
  payload: {
    id: nextTaskId++,
    title
  }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id
});
