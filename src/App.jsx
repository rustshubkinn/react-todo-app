import { useEffect, useState } from 'react';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { fetchTodo } from './api/api';

import Loader from './components/Loader/Loader';
import classes from './App.module.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setTodos(await fetchTodo());
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.wrapper}>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.todo_list_wrapper}>
          <TodoForm setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      )}
    </div>
  );
};

export default App;
