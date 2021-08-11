import { fetchTodo, postTodo } from 'api/api';

export const fetchTodos = () => async (dispatch) => {
  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    payload: {
      todos: [],
      loading: true,
    },
  });

  const result = await fetchTodo();

  dispatch({
    type: 'FETCH_TODOS_SUCCESS',
    payload: {
      todos: result,
      loading: false,
    },
  });
  return true;
};

export const filterTodos = (value) => async (dispatch) => {
  dispatch({
    type: 'FILTER_TODOS_REQUEST',
    payload: { loading: true },
  });

  const result = await fetchTodo();

  if (!value) {
    await fetchTodos();
    dispatch({
      type: 'FILTER_TODOS_SUCCESS',
      payload: {
        todos: result,
        loading: false,
      },
    });
    return;
  }

  const parsed = Boolean(parseInt(value, 10));

  let filteredTodos = [];

  if (parsed === true) {
    filteredTodos = result.filter((todo) => todo.isCompleted);
  } else {
    filteredTodos = result.filter((todo) => !todo.isCompleted);
  }

  dispatch({
    type: 'FILTER_TODOS_SUCCESS',
    payload: {
      todos: filteredTodos,
      loading: false,
    },
  });
};

export const addTodo = (value) => async (dispatch) => {
  const newTodo = {
    isCompleted: false,
    text: value,
    body: '',
  };

  dispatch({
    type: 'ADD_TODO_REQUEST',
    payload: {
      loading: true,
    },
  });

  if (!value) {
    const result = await fetchTodo();
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      payload: {
        loading: false,
        todos: result,
      },
    });
    return;
  }

  const todo = await postTodo(newTodo);
  const result = await fetchTodo();

  dispatch({
    type: 'ADD_TODO_SUCCESS',
    payload: {
      loading: false,
      todos: result,
      todo,
    },
  });
};
