const filters = {
  ALL: 'all',
  COMPLETED: 'completed',
  INCOMPLETE: 'incomplete',
};

export default filters;

export const applyFilter = (todos, filter) => {
  switch (filter) {
    case filters.ALL:
      return todos;
    case filters.COMPLETED:
      return todos.filter(todo => todo.completed);
    case filters.INCOMPLETE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};
