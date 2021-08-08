const URL =
  'https://todo-list-544c0-default-rtdb.europe-west1.firebasedatabase.app/todos';

export const fetchTodos = async () => {
  const response = await fetch(`${URL}.json`);
  const result = await response.json();
  if (!result) {
    return [];
  }
  return {
    type: 'FETCH_TODOS_REQUEST',
    payload: result,
  };
};

export const removeTodo = () => {};
