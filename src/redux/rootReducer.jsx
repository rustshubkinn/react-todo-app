const rootReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        todos: [],
        loading: true,
      };
  }
};

export default rootReducer;
