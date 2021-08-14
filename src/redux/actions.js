import {
  fetchTodo,
  postTodo,
  completeTodo,
  deleteTodo,
  editTodo,
  fetchTodoById,
} from 'api/api';

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
  if (!value) {
    return;
  }

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

  await postTodo(newTodo);
  const result = await fetchTodo();

  dispatch({
    type: 'ADD_TODO_SUCCESS',
    payload: {
      loading: false,
      todos: result,
    },
  });
};

export const completeTodoById = (id, isCompleted) => async (dispatch) => {
  dispatch({
    type: 'COMPLETE_TODO_REQUEST',
    payload: {
      loading: true,
    },
  });

  await completeTodo(id, isCompleted);
  const result = await fetchTodo();

  dispatch({
    type: 'COMPLETE_TODO_SUCCESS',
    payload: {
      loading: false,
      todos: result,
    },
  });
};

export const deleteTodoById = (id) => async (dispatch) => {
  dispatch({
    type: 'DELETE_TODO_REQUEST',
    payload: {
      loading: true,
    },
  });

  await deleteTodo(id);
  const result = await fetchTodo();

  dispatch({
    type: 'DELETE_TODO_SUCCESS',
    payload: {
      loading: false,
      todos: result,
    },
  });
};

export const editTodoById = (id, text) => async (dispatch) => {
  if (!text) {
    return;
  }

  dispatch({
    type: 'EDIT_TODO_REQUEST',
    payload: {
      loading: true,
    },
  });

  const newTodo = { text };

  await editTodo(id, newTodo);
  const result = await fetchTodo();

  dispatch({
    type: 'EDIT_TODO_SUCCESS',
    payload: {
      loading: false,
      todos: result,
    },
  });
};

export const openTodo = (id) => async (dispatch) => {
  dispatch({
    type: 'OPEN_TODO_REQUEST',
    payload: {
      loading: true,
    },
  });

  const currentTodo = await fetchTodoById(id);

  dispatch({
    type: 'OPEN_TODO_SUCCESS',
    payload: {
      loading: false,
      currentTodo,
    },
  });
};

export const editOpenedTodo = (id, formValues) => async (dispatch) => {
  dispatch({
    type: 'EDIT_OPENED_TODO_REQUEST',
    payload: {
      loading: true,
    },
  });

  const newTodo = { text: formValues.text, body: formValues.body };
  await editTodo(id, newTodo);

  dispatch({
    type: 'EDIT_OPENED_TODO_SUCCESS',
    payload: {
      loading: false,
    },
  });
};
