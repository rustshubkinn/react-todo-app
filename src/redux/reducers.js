/* eslint-disable indent */
export const INITIAL_STATE = {
  todos: [],
  loading: false,
  currentTodo: { text: '', body: '' },
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_REQUEST': {
      const { todos, loading } = action.payload;
      return { ...state, todos, loading };
    }
    case 'FETCH_TODOS_SUCCESS': {
      const { todos, loading } = action.payload;
      return { ...state, todos, loading };
    }
    case 'FILTER_TODOS_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'FILTER_TODOS_SUCCESS': {
      const { todos, loading } = action.payload;
      return { ...state, todos, loading };
    }
    case 'ADD_TODO_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'ADD_TODO_SUCCESS': {
      const { loading, todos } = action.payload;
      return { ...state, loading, todos };
    }
    case 'COMPLETE_TODO_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'COMPLETE_TODO_SUCCESS': {
      const { loading, todos } = action.payload;
      return { ...state, loading, todos };
    }
    case 'DELETE_TODO_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'DELETE_TODO_SUCCESS': {
      const { loading, todos } = action.payload;
      return { ...state, loading, todos };
    }
    case 'EDIT_TODO_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'EDIT_TODO_SUCCESS': {
      const { loading, todos } = action.payload;
      return { ...state, loading, todos };
    }
    case 'OPEN_TODO_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'OPEN_TODO_SUCCESS': {
      const { loading, currentTodo } = action.payload;
      return { ...state, loading, currentTodo };
    }
    case 'EDIT_OPENED_TODO_REQUEST': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    case 'EDIT_OPENED_TODO_SUCCESS': {
      const { loading } = action.payload;
      return { ...state, loading };
    }
    default:
      return { ...state };
  }
};
