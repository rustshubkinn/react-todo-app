/* eslint-disable indent */
const INITIAL_STATE = {
  todos: [],
  loading: false,
};

const rootReducer = (state = INITIAL_STATE, action) => {
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
      const { loading, todos, todo } = action.payload;
      return { ...state, loading, todos, todo };
    }
    default:
      return state;
  }
};

export default rootReducer;
