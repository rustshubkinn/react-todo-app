const URL =
  'https://todo-list-544c0-default-rtdb.europe-west1.firebasedatabase.app/todos';

export const fetchTodo = async () => {
  const response = await fetch(`${URL}.json`);
  const result = await response.json();
  if (!result) {
    return [];
  }
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

export const completeTodo = async (id, isCompleted) => {
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: !isCompleted }),
  };

  await fetch(`${URL}/${id}.json`, options);
};

export const editTodo = async (id, newTodo) => {
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  };

  await fetch(`${URL}/${id}.json`, options);
};
