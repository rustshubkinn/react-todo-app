const URL =
  'https://todo-list-544c0-default-rtdb.europe-west1.firebasedatabase.app/todos';

export const fetchTodo = async () => {
  const response = await fetch(`${URL}.json`);
  const result = await response.json();
  const normalizedTodos = Object.keys(result).map((k) => ({
    ...result[k],
    id: k,
  }));
  return normalizedTodos;
};

export const postTodo = async (newTodo) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  };

  await fetch(`${URL}.json`, options);
};

export const deleteTodo = async (id) => {
  const options = {
    method: 'DELETE',
  };

  await fetch(`${URL}/${id}.json`, options);
};
